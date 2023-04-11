import { useMutation } from "@tanstack/react-query";

export const useCreateUser = ({ onSuccess = () => {}, body }) =>
    useMutation({
        mutationFn: () =>
            fetch("https://mateiros-remix-97f1.fly.dev/login", {
                method: "post",
                body,
            }),
        onSuccess: async (response) => {
            if (response.status === 200) {
                const data = await response.json();
                onSuccess(data);
            }

            if (response.status === 400) {
                const data = await response.json();
                console.log(data);
            }
        },
    });

export const useUpdateUser = ({ userId, onSuccess = () => {}, body }) =>
    useMutation({
        mutationFn: () =>
            fetch(`https://mateiros-remix-97f1.fly.dev/user/${userId}`, {
                method: "patch",
                body,
            }),
        onSuccess: async (response) => {
            console.log(response);
            if (response.status === 200) {
                const data = await response.json();
                onSuccess(data);
            }

            if (response.status === 400) {
                const data = await response.json();
                console.log(data);
            }
        },
    });
