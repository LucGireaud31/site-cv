import {
  MeshPhongMaterial,
  Mesh,
  sRGBEncoding,
  Vector2,
  MeshMatcapMaterial,
  Color,
  AmbientLight,
  BoxGeometry,
  AnimationMixer,
  WebGLRenderer,
} from "three";
import { useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { createAnimationClip } from "./utils";
import gsap from "gsap";
import { roundNumber } from "../../utils/number";
import { cardAnim } from "./constants";

export interface ScrollCardProps {
  imgSrc1: string;
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
  offset?: number;
}

const DEFAULT_MESH_W = 1.4;
const DEFAULT_MESH_H = 0.8;
const DEFAULT_MESH_D = 0.2;

export function ScrollCard(props: ScrollCardProps) {
  const {
    imgSrc1,
    imgSrc2,
    beginTop,
    endTop,
    mesh: meshProps,
    maxRotation = Math.PI,
    zoom = 1,
    bgColor,
    offset = 0,
  } = props;
  let { camera, scene, gl } = useThree();

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
  const { mesh, animationMixer } = useMemo(() => {
    const mesh = new Mesh(geometry, materials);

    const animationMixer = new AnimationMixer(mesh);
    animationMixer.clipAction(cardAnim).play();

    return { mesh, animationMixer };
  }, [geometry, materials]);
  const meshHelper = useMemo(() => new Mesh(), []);

  // Light
  const light = useMemo(() => {
    const light = new AmbientLight();
    light.position.set(0, 0, zoom);

    return light;
  }, [zoom]);

  const scrollTop = Math.max(
    (document.querySelector("#scroll-container")?.scrollTop ?? 0) - offset,
    0
  );

  function getAnimationTime() {
    if (scrollTop >= endTop) {
      return 1;
    } else if (scrollTop > beginTop) {
      const interval = endTop - beginTop;
      const delta = scrollTop - beginTop;
      const percent = delta / interval;
      return (percent * maxRotation) / maxRotation;
    }
    return 0;
  }

  const timeAnimation = getAnimationTime();

  useFrame(async () => {
    if (
      (roundNumber(mesh.rotation.x, 2) == 0 && timeAnimation == 0) ||
      (roundNumber(mesh.rotation.x, 2) == 1 && timeAnimation == 1)
    )
      return;

    gsap.to(meshHelper.rotation, {
      x: timeAnimation,
      duration: 0.6,
      onUpdate: () => {
        animationMixer.setTime(meshHelper.rotation.x);
      },
    });
  });

  // gl.setPixelRatio(window.devicePixelRatio * 0.2);
  // Constants
  useEffect(() => {
    gl.outputEncoding = sRGBEncoding;
    gl.toneMappingExposure = meshProps?.lightening ?? 0.7;
    camera.position.z = zoom;

    if (bgColor) {
      scene.background = new Color(bgColor);
    }

    // Scene
    scene.clear();
    scene.add(mesh);
    scene.add(camera);
    scene.add(light);
  }, []);

  return <></>;
}
