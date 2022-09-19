import {
  MeshPhongMaterial,
  Mesh,
  DirectionalLight,
  sRGBEncoding,
  Vector2,
  MeshMatcapMaterial,
  Color,
} from "three";
import { memo, RefObject, useEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

export interface ScrollCardProps {
  imgSrc: string;
  imgSrc2?: string;
  beginHeight: number;
  endHeight: number;
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
  containerRef?: RefObject<HTMLDivElement>;
}

const DEFAULT_MESH_W = 14;
const DEFAULT_MESH_H = 7;
const DEFAULT_MESH_D = 1;

function ScrollCardMemo(props: ScrollCardProps) {
  const {
    imgSrc,
    imgSrc2,
    beginHeight,
    endHeight,
    mesh: meshProps,
    maxRotation = Math.PI * 2,
    zoom = 5,
    containerRef,
    bgColor,
  } = props;
  const { camera, scene, gl } = useThree();

  // Geometry rounded
  const geometry = useMemo(
    () =>
      new RoundedBoxGeometry(
        meshProps?.w ?? DEFAULT_MESH_W,
        meshProps?.h ?? DEFAULT_MESH_H,
        meshProps?.d ?? DEFAULT_MESH_D,
        undefined,
        meshProps?.rounded ?? 0.3
      ),
    [meshProps]
  );

  // Textures
  const textureFront = useMemo(
    () => new RGBELoader().load(imgSrc, () => {}),
    [imgSrc]
  );

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
    const light = new DirectionalLight();
    light.position.set(0, 0, zoom);

    return light;
  }, [zoom]);

  // new OrbitControls(camera, gl.domElement);

  useEffect(() => {
    // Constants

    gl.outputEncoding = sRGBEncoding;
    gl.toneMappingExposure = meshProps?.lightening ?? 1;
    camera.position.z = zoom;
    if (bgColor) {
      scene.background = new Color(bgColor);
    }

    function onScroll() {
      const scroll = containerRef?.current?.scrollTop ?? window.scrollY;

      if (scroll < beginHeight) {
        if (mesh.rotation.x != 0) {
          mesh.rotation.x = 0;
        }
        return;
      }

      if (scroll > endHeight) {
        if (mesh.rotation.x != maxRotation) {
          mesh.rotation.x = maxRotation;
        }
        return;
      }
      const interval = endHeight - beginHeight;
      const delta = scroll - beginHeight;
      const percent = delta / interval;

      mesh.rotation.x = percent * maxRotation;
    }

    // Init mesh rotation
    onScroll();

    const container = containerRef?.current ?? window;

    // Event listener
    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, [mesh, zoom, bgColor]);

  // Scene
  scene.clear();
  scene.add(mesh);
  scene.add(camera);
  scene.add(light);

  return <></>;
}

export const ScrollCard = memo(ScrollCardMemo, (prev, next) => {
  return (
    prev.imgSrc == next.imgSrc &&
    prev.imgSrc2 == next.imgSrc2 &&
    prev.beginHeight == next.beginHeight &&
    prev.endHeight == next.endHeight &&
    prev.zoom == next.zoom &&
    prev.maxRotation == next.maxRotation &&
    prev.mesh?.color == next.mesh?.color &&
    prev.mesh?.w == next.mesh?.w &&
    prev.mesh?.h == next.mesh?.h &&
    prev.mesh?.d == next.mesh?.d &&
    prev.mesh?.rounded == next.mesh?.rounded &&
    prev.mesh?.lightening == next.mesh?.lightening &&
    prev.bgColor == next.bgColor
  );
});
