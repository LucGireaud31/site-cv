import {
  MeshPhongMaterial,
  Mesh,
  sRGBEncoding,
  Vector2,
  MeshMatcapMaterial,
  Color,
  AmbientLight,
  Object3D,
  BoxGeometry,
} from "three";
import { memo, RefObject, useEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import gsap from "gsap";

export interface ScrollCardProps {
  imgSrc1: string;
  scrollTop: number;
  imgSrc2?: string;
  beginTop: number;
  endTop: number;
  zoom?: number;
  maxRotation?: number;
  mesh?: {
    color?: string;
    w?: number;
    h?: number;
    d?: number;
    rounded?: number;
    lightening?: number;
  };
  bgColor?: string;
}

const DEFAULT_MESH_W = 14;
const DEFAULT_MESH_H = 7;
const DEFAULT_MESH_D = 1;

let lastRotation = 0;

export function ScrollCard(props: ScrollCardProps) {
  const {
    imgSrc1,
    imgSrc2,
    beginTop,
    endTop,
    mesh: meshProps,
    maxRotation = Math.PI,
    zoom = 5,
    bgColor,
    scrollTop,
  } = props;
  const { camera, scene, gl } = useThree();

  // const { scrollContainerRef } = useScrollContainerContext();

  // Geometry rounded
  const geometry = useMemo(
    () =>
      new BoxGeometry(
        meshProps?.w ?? DEFAULT_MESH_W,
        meshProps?.h ?? DEFAULT_MESH_H,
        meshProps?.d ?? DEFAULT_MESH_D,
        undefined
        // meshProps?.rounded ?? 0.3
      ),
    [meshProps]
  );

  // Textures
  const textureFront = useMemo(() => {
    const texture = new RGBELoader().load(imgSrc1, () => {});

    return texture;
  }, [imgSrc1]);

  const textureBack = useMemo(() => {
    if (!imgSrc2) return null;

    const texture = new RGBELoader().load(imgSrc2, () => {});
    texture.rotation = Math.PI;
    texture.center = new Vector2(0.5, 0.5);
    return texture;
  }, [imgSrc2]);

  // Material
  const materials = useMemo(() => {
    const emptyMaterial = new MeshPhongMaterial({
      color: meshProps?.color ?? "white",
    });

    return [
      emptyMaterial,
      emptyMaterial,
      emptyMaterial,
      emptyMaterial,
      new MeshMatcapMaterial({
        map: textureFront,
      }),
      textureBack
        ? new MeshMatcapMaterial({
            map: textureBack,
          })
        : emptyMaterial,
    ];
  }, [meshProps?.color, textureFront, textureBack]);

  // Mesh
  const mesh = useMemo(
    () => new Mesh(geometry, materials),
    [geometry, materials]
  );

  // Light
  const light = useMemo(() => {
    const light = new AmbientLight();
    light.position.set(0, 0, zoom);

    return light;
  }, [zoom]);

  let toRotation = 0;

  if (scrollTop >= endTop) {
    toRotation = maxRotation;
  } else if (scrollTop > beginTop) {
    const interval = endTop - beginTop;
    const delta = scrollTop - beginTop;
    const percent = delta / interval;
    toRotation = percent * maxRotation;
  }
  mesh.rotation.x = toRotation;
  // gsap.fromTo(
  //   mesh.rotation,
  //   {
  //     x: scene.children.find((child: any) => child.geometry != null)?.rotation
  //       .x,
  //   },
  //   { x: toRotation, duration: 0.4 }
  // );

  console.log(gl.info.render.triangles);

  // Constants
  useEffect(() => {
    gl.outputEncoding = sRGBEncoding;
    gl.toneMappingExposure = meshProps?.lightening ?? 0.7;
    camera.position.z = zoom;

    if (bgColor) {
      scene.background = new Color(bgColor);
    }
  }, []);

  // Scene
  scene.clear();
  scene.add(mesh);
  scene.add(camera);
  scene.add(light);

  return <></>;
}
