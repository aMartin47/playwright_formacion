import { faker } from "@faker-js/faker";
import { expect, Locator, Page } from "@playwright/test";

export class Registration {

    private readonly nameText: Locator
    private readonly lastNameText: Locator
    private readonly ageText: Locator
    private readonly countrySelect: Locator
    private readonly sexM: Locator
    private readonly sexF: Locator
    private readonly emailText: Locator
    private readonly dayCheckbox: Locator
    private readonly pictureAtt: Locator
    private readonly saveBtn: Locator
    private readonly page: Page

    private readonly summaryPage: Promise<Page>
    
    constructor (page:Page){
        this.nameText = page.locator("id=name")
        this.lastNameText = page.locator("id=last-name")
        this.ageText = page.locator("id=age")
        this.countrySelect = page.locator("id=country")
        this.sexM = page.locator("input[value='M']")
        this.sexF = page.locator("input[value='F']")
        this.emailText = page.locator("id=email")
        this.dayCheckbox = page.locator("id=monday")
        this.pictureAtt = page.locator("id=picture")
        this.saveBtn = page.locator("id=save-btn")
        this.summaryPage = page.waitForEvent("popup")        

    }



    async registrationOk(name: string, lastName: string, age: string, country: string, sex: string, email: string, day: string, image: string){

        await this.nameText.fill(name)
        await this.lastNameText.fill(lastName)
        await this.ageText.fill(age)
        await this.countrySelect.selectOption(country)
        if(sex = "M"){
            await this.sexM.click()
        }else{
            await this.sexF.click()
        }
        await this.emailText.fill(email)
        await this.dayCheckbox.click()
        
        await this.pictureAtt.setInputFiles("tests/images/"+image)

        await this.saveBtn.click()

    }    

    async getCurrentName () {
        await (await this.summaryPage).waitForLoadState()              
        return (await this.summaryPage).locator("//strong[contains(., 'Nombre')]/ancestor::p").textContent()
    }    
    async getCurrentLastName () {
        await (await this.summaryPage).waitForLoadState()             
        return (await this.summaryPage).locator("//strong[contains(., 'Apellido')]/ancestor::p").textContent()
    }    
    async getCurrentAge () {
        await (await this.summaryPage).waitForLoadState()          
        return (await this.summaryPage).locator("//strong[contains(., 'Edad')]/ancestor::p").textContent()
    }


    async registrationRandom(){

        const name = faker.person.firstName()
        const lastName = faker.person.lastName()
        const age = faker.number.int({min: 10, max: 99})

        await this.nameText.fill(name)
        await this.lastNameText.fill(lastName)
        await this.ageText.fill(age.toString())
        await this.countrySelect.selectOption("Colombia")
        if(age < 50){
            await this.sexM.click()
        }else{
            await this.sexF.click()
        }
        await this.emailText.fill(name+lastName+age.toString()+"@prueba.com")
        await this.dayCheckbox.click()
        await this.pictureAtt.setInputFiles("tests/images/kizaru.png")

        await this.saveBtn.click()

    }

}