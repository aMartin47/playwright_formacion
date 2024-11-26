import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
import { NavigateTo } from '../pageObjets/navigateTo/NavigateTo';

test ('login', async({page}, testInfo) =>{

    const navigateTo = new NavigateTo(page)
    await navigateTo.registration()

    const name = faker.person.firstName()
    const lastName = faker.person.lastName()
    const age = faker.number.int({min: 10, max: 99})
    const country = "Colombia"
    const sexM = "M"
    const sexF = "F"
    const email = name + lastName + "@gmail.com"
    const day1 = "monday"
    const day2 = "tuesday"

    await page.locator("id=name").fill(name)
    await page.locator("id=last-name").fill(lastName)
    await page.locator("id=age").fill(age.toString())
    await page.locator("id=country").selectOption(country)
    await page.locator("input[value='"+sexM+"']").click()
    await page.locator("id=email").fill(email)
    await page.locator("id="+day1).click()
    await page.locator("//label[@for='"+day2+"']").click()
    await page.locator("id=picture").setInputFiles("tests/images/kizaru_by_lunuel_dhpqiek-pre.png")

    /*await testInfo.attach('register',{
        body: await page.screenshot({fullPage: true}),
        contentType: 'Image/png'
    })*/

    const [summaryPage] = await Promise.all(
        [
            page.waitForEvent('popup'),
            page.locator("id=save-btn").click()
        ]
    )

    await summaryPage.waitForLoadState()
    await expect(summaryPage).toHaveTitle("Summary")

    const currentName = await summaryPage.locator("//strong[contains(., 'Nombre')]/ancestor::p").textContent()
    const currentLastName = await summaryPage.locator("//strong[contains(., 'Apellido')]/ancestor::p").textContent()
    const currentAge = await summaryPage.locator("//strong[contains(., 'Edad')]/ancestor::p").textContent()
    const currentCountry = await summaryPage.locator("//strong[contains(., 'País')]/ancestor::p").textContent()
    const currentSex = await summaryPage.locator("//strong[contains(., 'Sexo')]/ancestor::p").textContent()
    const currentEmail = await summaryPage.locator("//strong[contains(., 'Correo')]/ancestor::p").textContent()
    const currentDays = await summaryPage.locator("//strong[contains(., 'Días')]/ancestor::p").textContent()

    expect (currentName).toContain("hola")
    expect (currentLastName).toContain(lastName)
    expect (currentAge).toContain(age.toString())
    expect (currentCountry).toContain(country)
    expect (currentSex).toContain(sexM)
    expect (currentEmail).toContain(email)
    expect (currentDays).toContain("Lunes")

    console.log(faker.date.weekday())


})