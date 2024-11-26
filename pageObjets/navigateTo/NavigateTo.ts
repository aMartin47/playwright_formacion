import { Page } from "@playwright/test";

export class NavigateTo{

    private readonly url:Page
    
    constructor(page: Page){
        this.url = page
    }

    async loginPage(){
        await this.url.goto("http://127.0.0.1:5500/login.html")
    }
    async registration(){
        await this.url.goto("http://127.0.0.1:5500/registration/register.html")
    }
    async shoppingCart(){
        await this.url.goto("http://127.0.0.1:5500/shopping%20cart/index.html")
    }    

}