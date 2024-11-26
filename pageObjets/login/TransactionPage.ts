import { Locator, Page } from "@playwright/test"
/*
export class transactionsPage {

    private readonly addTransactionBtn: Locator
    private readonly dateText: Locator
    private readonly amountText: Locator
    private readonly descriptionText: Locator
    private readonly saveBtn: Locator

    constructor (page: Page){
        this.addTransactionBtn = page.locator("//button[contains(text(),'Añadir transa')]")
        this.dateText = page.locator('id=date')
        this.amountText = page.locator('id=amount')
        this.descriptionText = page.locator('id=description')
        this.saveBtn = page.locator("//button[contains(text(),'Guardar')]")
    }

    async randomTransactions (number: number){

        for(let i=1; i<=number; i++){
            let dayString
            if(day<10){
                dayString = "0" + day.toString()
            }
    
            this.addTransactionBtn.click()
            this.dateText.fill(year+'-'+month+'-'+dayString)
            this.amountText.fill(amount)
            this.descriptionText.fill(description)
            this.saveBtn.click()
    
        }

    }


    const day = faker.number.int({min: 1, max: 28})
    const month = faker.number.int({min: 1, max: 12})
    const year = faker.number.int({min: 2018, max: 2024})
    const amount = faker.number.int({min: 100, max: 10000}).toString()
    const description = faker.food.description()

    for(let i=1; i<=30; i++){
        let dayString
        if(day<10){
            dayString = "0" + day.toString()
        }

        await page.locator("//button[contains(text(),'Añadir transa')]").click()
        await page.locator('id=date').fill(year+'-'+month+'-'+dayString)
        await page.locator('id=amount').fill(amount)
        await page.locator('id=description').fill(description)
        await page.locator("//button[contains(text(),'Guardar')]").click()

    }

}*/