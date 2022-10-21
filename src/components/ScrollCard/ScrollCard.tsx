import {
  MeshPhongMaterial,
  Mesh,
  sRGBEncoding,
  Vector2,
  MeshMatcapMaterial,
  Color,
  AmbientLight,
} from "three";
import { memo, RefObject, useEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

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
  containerRef?: RefObject<HTMLDivElement>;
}

const DEFAULT_MESH_W = 14;
const DEFAULT_MESH_H = 7;
const DEFAULT_MESH_D = 1;

function ScrollCardMemo(props: ScrollCardProps) {
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

  // new OrbitControls(camera, gl.domElement);

  useEffect(() => {
    // Constants
    gl.outputEncoding = sRGBEncoding;
    gl.toneMappingExposure = meshProps?.lightening ?? 0.7;
    camera.position.z = zoom;

    if (bgColor) {
      scene.background = new Color(bgColor);
    }

    function onScroll() {
      console.log(scrollTop);
      if (scrollTop <= beginTop) {
        if (mesh.rotation.x != 0) {
          mesh.rotation.x = 0;
        }
        return;
      }

      if (scrollTop >= endTop) {
        if (mesh.rotation.x != maxRotation) {
          mesh.rotation.x = maxRotation;
        }
        return;
      }
      const interval = endTop - beginTop;
      const delta = scrollTop - beginTop;
      const percent = delta / interval;

      mesh.rotation.x = percent * maxRotation;
    }

    // Init mesh rotation
    onScroll();
    console.log("scroll");
  }, [mesh, zoom, bgColor, scrollTop]);

  // Scene
  scene.clear();
  scene.add(mesh);
  scene.add(camera);
  scene.add(light);

  return null;
}

export const ScrollCard = memo(ScrollCardMemo, (prev, next) => {
  return (
    prev.scrollTop == next.scrollTop &&
    prev.imgSrc1 == next.imgSrc1 &&
    prev.imgSrc2 == next.imgSrc2 &&
    prev.beginTop == next.beginTop &&
    prev.endTop == next.endTop &&
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
