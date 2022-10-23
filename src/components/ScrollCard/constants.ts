import { createAnimationClip } from "./utils"

export const cardRotations = [
    { time: 0, value: [0, 0, 0] },
    { time: 0.15, value: [0, 0, 0] },
    { time: 0.45, value: [Math.PI/15, 0, 0] },
    { time: 0.55, value: [Math.PI - Math.PI/15, 0, 0] },
    { time: 0.85, value: [Math.PI, 0, 0] },
    { time: 1, value: [Math.PI, 0, 0] },
];
export const cardScales = [
    {time:0,value:1},
    { time: 0.15, value: 0.6 },
    { time: 0.85, value: 0.6 },
    { time: 1, value: 1 },
];
export const cardPositions = [
    {time:0,value:[0,0,0]},
    { time: 0.15, value: [-0.5, 0, 0] },
    { time: 0.16, value: [-0.5, 0, 0] },
    { time: 0.84, value: [-0.5, 0, 0] },
    { time: 0.85, value: [-0.5, 0, 0] },
    {time:1,value:[0,0,0]},
]

export const cardAnim = createAnimationClip('card', {
        scale: cardScales,
        position: cardPositions,
        rotation: cardRotations,
    })
