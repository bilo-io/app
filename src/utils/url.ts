export function toUrlParams(params: Record<string, any>): string {
    const queryString = Object.keys(params)
        .map((key) => {
            const value = params[key];

            if (Array.isArray(value)) {
                // Handle arrays by encoding each value with the same key
                return value
                    .map((arrayValue) => `${encodeURIComponent(key)}=${encodeURIComponent(arrayValue)}`)
                    .join('&');
            } else if (value !== undefined && value !== null) {
                // Handle single values
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            }
            return ''; // Skip null or undefined values
        })
        .filter((param) => param.length > 0) // Filter out empty strings
        .join('&');

    return queryString;
}
