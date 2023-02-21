export const entry: string;
export const mode: string;
export const watch: boolean;
export const devtool: string;
export namespace output {
    const filename: string;
    const path: string;
}
export namespace module {
    const rules: ({
        test: RegExp;
        use: string;
        exclude: RegExp;
    } | {
        test: RegExp;
        use: string[];
        exclude?: undefined;
    })[];
}
export namespace resolve {
    const extensions: string[];
}
