import { faker } from "@faker-js/faker";
import { Locator, Page } from "@playwright/test";

export class ShoppingCart {

    //elementos página de compra
    private readonly addProduct1: Locator
    private readonly addProduct2: Locator
    private readonly addProduct3: Locator

    private readonly cartBtn: Locator

    //elementos página resumen
    readonly checkoutBtn: Locator
    private readonly amountProduct1: Locator
    private readonly amountProduct2: Locator
    private readonly amountProduct3: Locator

    //elementos página de pago
    private readonly name: Locator
    private readonly email: Locator
    private readonly address: Locator
    private readonly infoPayLink: Locator
    private readonly cardNumber: Locator
    private readonly cardExpiry: Locator
    private readonly cardCVC: Locator
    private readonly payBtn: Locator
    readonly confirmation: Locator

    constructor (page:Page){

        this.addProduct1 = page.locator("//h5[contains(., 'Producto 1')]/ancestor::div[contains(@class, 'card-body')]//button")
        this.addProduct2 = page.locator("//h5[contains(., 'Producto 2')]/ancestor::div[contains(@class, 'card-body')]//button")
        this.addProduct3 = page.locator("//h5[contains(., 'Producto 3')]/ancestor::div[contains(@class, 'card-body')]//button")
        
        this.cartBtn = page.locator("button#view-cart-btn")

        this.checkoutBtn = page.locator("id=checkout-btn")

        this.amountProduct1 = page.locator("//tbody[@id='cart-items']//td[contains(., 'Producto 1')]/ancestor::tr//td[3]")
        this.amountProduct2 = page.locator("//tbody[@id='cart-items']//td[contains(., 'Producto 2')]/ancestor::tr//td[3]")
        this.amountProduct3 = page.locator("//tbody[@id='cart-items']//td[contains(., 'Producto 3')]/ancestor::tr//td[3]")

    
        this.name = page.locator("id=name")
        this.email = page.locator("id=email")
        this.address = page.locator("id=address")
        this.infoPayLink = page.getByRole('link', { name: 'Información de pago' })
        this.cardNumber = page.locator("id=card-number")
        this.cardExpiry = page.locator("id=card-expiry")
        this.cardCVC = page.locator("id=card-cvc")
        this.payBtn = page.locator("id=place-order-btn")
    
        this.confirmation = page.locator("//h4[contains(., 'Tu compra fue exitosa')]")


    }
    
    async buyProduct1 (num: number) {

        for(let i=0; i<=num; i++){
            await this.addProduct1.click()
        }

        await this.cartBtn.click()

    }
    async buyProduct2 (num: number) {

        for(let i=0; i<=num; i++){
            await this.addProduct2.click()
        }

        await this.cartBtn.click()

    }
    async buyProduct3 (num: number) {

        for(let i=0; i<=num; i++){
            await this.addProduct3.click()
        }

        await this.cartBtn.click()

    }

    async buySomeProducts (prod1: number, prod2: number, prod3: number) {

        for(let i=1; i<=prod1; i++){
            await this.addProduct1.click()
        }
        for(let i=1; i<=prod2; i++){
            await this.addProduct2.click()
        }
        for(let i=1; i<=prod3; i++){
            await this.addProduct3.click()
        }

        await this.cartBtn.click()

    }

    async product1Quantity () {

        return await this.amountProduct1.textContent()

    }
    async product2Quantity () {

        return await this.amountProduct2.textContent()

    }
    async product3Quantity () {

        return await this.amountProduct3.textContent()

    }

    async payInfoRandom () {

        const nameFaker = faker.person.fullName()
        const addressFaker = faker.location.streetAddress()
        const cardNumberFaker = faker.finance.creditCardNumber()
        const cardExpiryFaker = faker.number.int({min:1, max: 12})+"-"+faker.number.int({min:2024, max: 2030})
        const cardCVCFaker = faker.finance.creditCardCVV()


        await this.name.fill(nameFaker)
        await this.email.fill(nameFaker+"@gmail.com")
        await this.address.fill(addressFaker)
        await this.infoPayLink.click()
        await this.cardNumber.fill(cardNumberFaker)
        await this.cardExpiry.fill(cardExpiryFaker)
        await this.cardCVC.fill(cardCVCFaker)
        await this.payBtn.click()
        
    }
}

