import { atom } from "recoil"

type blogSchema = {
    id: string,
    title: string,
    content: string,
    publishedDate: string,
    authorName: string
};

export const blogAtom = atom<blogSchema | undefined>({
    key: "blogState",
    default: undefined
})
