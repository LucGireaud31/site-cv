export function numberToPx(n: number) {
    return `${n}px`
}

export function pxToNumber(p: string) {
    return parseInt(p.replace("px",""))
}

export function limitNumber(value: number,min:number,max:number) {
    return Math.max(Math.min(value,max),min)
}
