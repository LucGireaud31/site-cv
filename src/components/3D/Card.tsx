import { useThree } from "@react-three/fiber";
import { RefObject, useEffect, useMemo } from "react";
import {
  MeshPhongMaterial,
  Mesh,
  DirectionalLight,
  sRGBEncoding,
  Raycaster,
  MeshMatcapMaterial,
  Color,
} from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

interface CardProps {
  canvasRef: RefObject<HTMLCanvasElement>;
  imgSrc: string;
  index: number;
  width: number;
  height: number;
  onClick(): void;
}

export function Card(props: CardProps) {
  const { canvasRef, index, imgSrc, width, height, onClick } = props;
  const { camera, scene, gl } = useThree();

  gl.outputEncoding = sRGBEncoding;
  gl.toneMappingExposure = 1.2;

  // First
  const geometry = useMemo(
    () => new RoundedBoxGeometry(width, height, 1, undefined, 1),
    []
  );

  // Texture
  const texture = useMemo(() => new RGBELoader().load(imgSrc, () => {}), []);

  // Material
  const materials = useMemo(() => {
    texture.flipY = true;
    const material = new MeshPhongMaterial({
      color: "#048b9a",
    });

    return [
      material,
      material,
      material,
      material,
      new MeshMatcapMaterial({
        map: texture,
      }),
      material,
    ];
  }, []);

  const mesh = useMemo(
    () => new Mesh(geometry, materials),
    [geometry, materials]
  );

  // Light
  const light = useMemo(() => {
    const light = new DirectionalLight();
    light.position.set(0, 0, 5);

    return light;
  }, []);

  // new OrbitControls(camera, gl.domElement);

  useEffect(() => {
    camera.position.z = 10;
    // mesh.translateX(-MESH_W / 2);
    // mesh.translateY(MESH_H / 2);

    const {
      x: canvasX,
      y: canvasY,
      width: canvasWidth,
      height: canvasHeight,
    } = canvasRef.current?.getBoundingClientRect() ?? { x: 0, y: 0 };

    const canvasCenter = {
      x: canvasX + (canvasWidth ?? 0) / 2,
      y: canvasY + window.scrollY + (canvasHeight ?? 0) / 2,
    };

    function onMouseMouve(e: any) {
      const mouse = { x: e.clientX, y: e.clientY };

      const mouseOffset = {
        x: mouse.x - canvasCenter.x,
        y: mouse.y + window.scrollY - canvasCenter.y,
      };

      const maxRotationX = 0.1; // rad
      const maxRotationY = 0.2; // rad
      const maxDistance = 400; //px

      const rotation = {
        x:
          mouseOffset.x > 0
            ? (Math.min(mouseOffset.x, maxDistance) * maxRotationX) /
              maxDistance
            : (Math.max(mouseOffset.x, -maxDistance) * maxRotationX) /
              maxDistance,
        y:
          mouseOffset.y > 0
            ? (Math.min(mouseOffset.y, maxDistance) * maxRotationY) /
              maxDistance
            : (Math.max(mouseOffset.y, -maxDistance) * maxRotationY) /
              maxDistance,
      };

      mesh.rotation.x = rotation.y;
      mesh.rotation.y = rotation.x;
    }

    function onMouseClick(e: any) {
      const mouse = { x: e.clientX, y: e.clientY };
      const raycaster = new Raycaster();

      const mouseOffset = {
        x: ((mouse.x - canvasCenter.x) * 2) / (canvasWidth ?? 0),
        y:
          ((mouse.y + window.scrollY - canvasCenter.y) * 2) /
          (canvasHeight ?? 0),
      };

      console.log(canvasCenter, index);

      raycaster.setFromCamera(mouseOffset, camera);
      if (raycaster.intersectObject(mesh).length > 0) {
        onClick();
      }
    }

    canvasRef.current?.addEventListener("mousedown", onMouseClick);
    document.addEventListener("mousemove", onMouseMouve);
    return () => {
      document.removeEventListener("mousemove", onMouseMouve);
      canvasRef.current?.removeEventListener("mousedown", onMouseClick);
    };
  }, [mesh, canvasRef]);

  scene.clear();
  scene.add(mesh);
  scene.add(camera);
  scene.add(light);

  return <></>;
}
