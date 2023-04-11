import { atom } from "recoil";

export const userState = atom({
    key: "user",
    default: {
        token: false,
        name: "Pedro Sampaio",
        phonenumber: "000 000 000",
        email: "pedro.asd@hotmail.com",
    },
});
