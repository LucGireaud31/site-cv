import { AnimationClip, Euler, InterpolateLinear, InterpolateSmooth, Quaternion, QuaternionKeyframeTrack, VectorKeyframeTrack } from "three"

const eulerArrayToQuaternionArray = (
    eulerArray: any
): any => {
    const e = new Euler(...eulerArray)
    const q = new Quaternion().setFromEuler(e)
    return [q.x, q.y, q.z, q.w]
}


export function createAnimationClip (
    name: string,
    keyframes: any
){
    const { scale, position, rotation } = keyframes
    const kftArray = []
    if (scale) {
        const scaleTimes = scale.map(({ time }:any) => time)
        const scaleValues = scale.reduce(
            (acc: number[], { value }:any) => acc.concat([value, value, value]),
            []
        )
        console.log(scaleValues)
        const keyframeTrack = new VectorKeyframeTrack(
            '.scale',
            scaleTimes,
            scaleValues
        )
        kftArray.push(keyframeTrack)
    }

    if (position) {
        const positionTimes = position.map(({ time }:any) => time)
        const positionValues = position.reduce(
            (acc: number[], { value }:any) => acc.concat(value),
            []
        )
        const keyframeTrack = new VectorKeyframeTrack(
            '.position',
            positionTimes,
            positionValues,
            InterpolateSmooth
        )
        kftArray.push(keyframeTrack)
    }

    if (rotation) {
        const rotationTimes = rotation.map(({ time }:any) => time)
        const rotationValues = rotation.reduce(
            (acc: number[], { value }:any) =>
                acc.concat(eulerArrayToQuaternionArray(value)),
            []
        )
        console.log(rotationValues)
        const keyframeTrack = new QuaternionKeyframeTrack(
            '.quaternion',
            rotationTimes,
            rotationValues,
            InterpolateLinear
        )
        kftArray.push(keyframeTrack)
    }
    return new AnimationClip(name, 1, kftArray)
}
