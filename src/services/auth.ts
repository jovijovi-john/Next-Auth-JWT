import { v4 as uuid } from "uuid";

type SignInRequestData = {
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

export async function signInRequest(data : SignInRequestData) {
    await delay(150);

    return {
        token: uuid(),
        user: {
            name: "John Víctor",
            email: "jovijovi2019@hotmail.com",
            avatar_url: "https://github.com/jovijovi-john.png"
        }
    }
}

export async function recoverUserInformation() {
    delay();

    return {
        user: {
            name: "John Víctor",
            email: "jovijovi2019@hotmail.com",
            avatar_url: "https://github.com/jovijovi-john.png"
        }
    }
}