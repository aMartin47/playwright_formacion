import { Locator, Page } from "@playwright/test";

export class LoginPage {
    //defino variables PRIVADA de SOLOLECTURA llamada X y que va a recibir un LOCATOR
    //Se hacen PRIVATE para que solo se puedan modificar desde este archivo
    private readonly userNameText: Locator
    private readonly passwordText: Locator
    private readonly loginBtn: Locator

    //Constructor es el metodo que se llama cuando se hace una instancia de esta clase. Con esto se puede usar lo aquí definido en otros archivos
    constructor(page: Page){
        this.userNameText = page.locator("input#username")
        this.passwordText = page.locator("input#password")
        this.loginBtn = page.locator("//button[@type='submit']")
    }

    async doLoginOk (username: string, password: string){

        await this.userNameText.fill(username)
        await this.passwordText.fill(password)
        await this.loginBtn.click()

    }

}