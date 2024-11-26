import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

test ('Create transactions', async({page}) =>{

    const day = faker.number.int({min: 1, max: 28})
    const month = faker.number.int({min: 1, max: 12})
    const year = faker.number.int({min: 2018, max: 2024})
    const amount = faker.number.int({min: 100, max: 10000}).toString()
    const description = faker.food.description()
    
    await page.goto('http://127.0.0.1:5500/login.html')

    await page.locator('input#username').fill('user')
    await page.locator('input#password').fill('pass')
    await page.locator("//button[@type='submit']").click()

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


});