import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'
import exp from 'constants'
import { NavigateTo } from '../../../pageObjets/navigateTo/NavigateTo'
import { ShoppingCart } from '../../../pageObjets/shoppingCart/ShoppingCart'


test('Buy 5 of product1, 7 of product2 and 1 of product3', async({page}) => {

    const navigateTo = new NavigateTo(page)
    const shoppingCartPage = new ShoppingCart(page)

    await test.step('Navigating to shopping cart page', async() =>{
        
        await navigateTo.shoppingCart()

    })
    await test.step('Select the products', async() =>{
        
        await shoppingCartPage.buySomeProducts(80, 2, 32)

    })
    await test.step('Check the products selection', async() =>{

        await page.waitForTimeout(1000) 
        
        expect(await shoppingCartPage.product1Quantity()).toEqual('80')
        expect(await shoppingCartPage.product2Quantity()).toEqual('2')
        expect(await shoppingCartPage.product3Quantity()).toEqual('32')

        await shoppingCartPage.checkoutBtn.click()

    })
    await test.step('Fill the pay info and buy', async() =>{
        
        await shoppingCartPage.payInfoRandom()
        await expect(shoppingCartPage.confirmation).toBeVisible()  

    })
})