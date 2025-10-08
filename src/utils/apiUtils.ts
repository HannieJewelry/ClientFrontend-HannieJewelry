import qs from 'qs';

export const mergeDataAPI =
    <T>(current: T) =>
        (updated?: Partial<T>): T => ({
            ...current,
            ...(updated ?? {})
        });

export const mergeNestedData = <T>(base: T, updated: Partial<T>, nestedFields: (keyof T)[]): T => {
    const mergeField = (field: keyof T): Partial<T> =>
        ({
            [field]: mergeDataAPI(base[field])(updated?.[field])
        }) as Partial<T>;

    const nestedUpdates = nestedFields.map(mergeField).reduce<Partial<T>>((acc, curr) => ({ ...acc, ...curr }), {});

    return {
        ...mergeDataAPI(base)(updated),
        ...nestedUpdates
    };
};

export interface URLSearchQueryParams {
    filter?: string;
    sort?: string;
    page?: number;
    size?: number;
}

export const buildQueryString = (params?: URLSearchQueryParams): string => {
    const queryString = qs.stringify(params, {
        encode: false,
        format: 'RFC1738'
    });
    
    // Debug: Uncomment to log query string building process
    // if (params?.filter) {
    //     console.log('🔧 Building query string:');
    //     console.log('📥 Input params:', params);
    //     console.log('📤 Output query:', queryString);
    // }
    
    return queryString;
};