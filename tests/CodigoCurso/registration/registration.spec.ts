import {test, expect} from '@playwright/test'
import { NavigateTo } from '../../../pageObjets/navigateTo/NavigateTo'
import { Registration } from '../../../pageObjets/registration/Registraton'

test('Registration manual OK', async({page}) => {

    const navigateTo = new NavigateTo(page)
    const registrationPage = new Registration(page)

    const name='Julian'
    const lastName = 'Mesa'
    const age = '10'
    const country = 'Colombia'
    const email = 'pepito@gmail.com'
    const sex = 'M'
    const day = 'monday'
    const picture = 'kizaru.png'

    await test.step('Navigating to registration page', async() =>{
        
        await navigateTo.registration()

    })

    await test.step('Complete a registration', async() =>{        

        await registrationPage.registrationOk(name,lastName,age,country,sex,email,day,picture)

    })

    expect(await registrationPage.getCurrentName()).toContain(name)
    expect(await registrationPage.getCurrentLastName()).toContain(lastName)
    expect(await registrationPage.getCurrentAge()).toContain(age)

})


test('registration failure', async({page}) => {

    await page.goto('http://127.0.0.1:5500/register.html')

    const name='Julian'
    const lastName = 'Mesa'
    const age = '10'
    const country = 'Colombia'
    const email = 'pepito@gmail.com'
    const sex = 'M'

    await page.locator("id=name").fill(name)

    expect(true).toEqual(false)
})


test('Registration random', async({page}) => {

    const navigateTo = new NavigateTo(page)
    const registrationPage = new Registration(page)


    await test.step('Navigating to registration page', async() =>{
        
        await navigateTo.registration()

    })

    await test.step('Complete a registration', async() =>{        

        await registrationPage.registrationRandom()
        await registrationPage.getCurrentName()

    })

})



