// src/utils/deepMerge/deepMerge.ts
const isObject = (item: any) => {
    return item && typeof item === 'object' && !Array.isArray(item) && !(item instanceof Date);
};

export const deepMerge = (target: any, source: any): any => {
    const output = { ...target };

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else if (source[key] instanceof Date) {
                Object.assign(output, { [key]: new Date(source[key].getTime()) });
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        }
    }
    return output;
};


