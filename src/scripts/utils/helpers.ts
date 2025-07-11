export function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

export async function OptAwait<T>(cb: () => (T | Promise<T>), doAwait: boolean): Promise<T> {
    return cb && (doAwait ? (await cb()) : cb());
}

