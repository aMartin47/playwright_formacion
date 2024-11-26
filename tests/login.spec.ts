import { test, expect } from '@playwright/test';
import { NavigateTo } from '../pageObjets/navigateTo/NavigateTo';
import { LoginPage } from '../pageObjets/login/LoginPage';

test ('login', async({page}) =>{

    const date = '2024-09-1'
    const amount = '2500'
    const description = 'descripcion de prueba'
    
    const navigateTo = new NavigateTo(page)
    const loginPage = new LoginPage(page)

    await navigateTo.loginPage()

    await loginPage.doLoginOk("user","pass")

    await page.locator("//button[contains(text(),'Añadir transa')]").click()
    await page.locator('id=date').fill(date)
    await page.locator('id=amount').fill(amount)
    await page.locator('id=description').fill(description)
    await page.locator("//button[contains(text(),'Guardar')]").click()

    const actualDate = await page.locator("//*[@id='transactions-list']/tr[1]/td[1]").textContent()
    const actualAmount = await page.locator("//*[@id='transactions-list']/tr[1]/td[2]").textContent()
    const actualDescription = await page.locator("//*[@id='transactions-list']/tr[1]/td[3]").textContent()

    expect (actualDate).toEqual(date)
    expect (actualAmount).toEqual(amount)
    expect (actualDescription).toEqual(description)

});
