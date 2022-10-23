import { AnimationClip, Euler, InterpolateLinear, Quaternion, QuaternionKeyframeTrack } from "three"
import { cardRotations } from "./constants"

const eulerArrayToQuaternionArray = (
    eulerArray: any
): any => {
    const e = new Euler(...eulerArray)
    const q = new Quaternion().setFromEuler(e)
    return [q.x, q.y, q.z, q.w]
}

export function createAnimationClip() {
    const kftArray:QuaternionKeyframeTrack[] = []

    const rotationTimes = cardRotations.map(({ time }) => time)
    const rotationValues = cardRotations.reduce(
        (acc: number[], { value }) =>
            acc.concat(eulerArrayToQuaternionArray(value)),
        []
    )
    const keyframeTrack = new QuaternionKeyframeTrack(
        '.quaternion',
        rotationTimes,
        rotationValues,
        InterpolateLinear
    )
    kftArray.push(keyframeTrack)

    return new AnimationClip("card",1,kftArray)
}