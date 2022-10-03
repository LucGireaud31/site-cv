export function numberToPx(n: number) {
    return `${n}px`
}

export function pxToNumber(p: string) {
    if (!p.includes("px")) {
        const res = parseInt(p);
        if (isNaN(res)) return -1;
        return res;
    }
    
    return parseInt(p.replace("px",""))
}

export function limitNumber(value: number,min:number,max:number) {
    return Math.max(Math.min(value,max),min)
}


export function roundNumber(value: number, decimals: number) {
    const pow10 = 10 ** decimals
    return Math.round(value*pow10)/pow10
}
