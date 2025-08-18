import {atom} from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

type myBlogSchema = {
    id: string,
    username: string
}

export const userState = atom<myBlogSchema|null>({
    key: "userState",
    default:null,
    effects_UNSTABLE:[persistAtom]
})