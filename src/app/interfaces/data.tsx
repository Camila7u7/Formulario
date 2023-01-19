
export interface Documentos {
    [x: string]: any;
    array: Array<Document>
}

export type Document = {
    TEXTO: string;
    DATO: string;
}