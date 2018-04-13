export const PACK_BUFFER="packBuffer"
export function packBuffer(buffer) {
    return {
        type: PACK_BUFFER,
        buffer
    }
}