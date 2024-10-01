export function toBoolean(value: any): boolean {
    if (typeof value === 'boolean') {
        return value;
    }

    if (typeof value === 'string') {
        // for boolean, compare to empty String to allow attributes appearing with
        // no value to be treated as 'true'
        return value.toUpperCase() === 'TRUE' || value == '';
    }

    return false;
}

export function toNumber(value: any): number | undefined {
    if (typeof value === 'number') {
        return value;
    }

    if (typeof value === 'string') {
        const parsed = parseInt(value);
        if (isNaN(parsed)) {
            return undefined;
        }
        return parsed;
    }
    return undefined;
}