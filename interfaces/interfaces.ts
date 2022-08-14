export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface UpdatedPost {
    userId: number,
    id?: number,
    title: string,
    body: string
}

export interface Resp {
    [key: string]: any
}