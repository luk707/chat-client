export interface ClassMap {
    [key:string]:boolean;
}

export default (classMap: ClassMap): string => {
    return Object.keys(classMap).map((key) => {
        return classMap[key] ? key : "";
    }).join(" ");
}