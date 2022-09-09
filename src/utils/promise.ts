export async function sleep(time: number) {
    return await new Promise(r => setTimeout(r, time));
}