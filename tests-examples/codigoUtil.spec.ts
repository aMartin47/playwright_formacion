import { faker } from "@faker-js/faker";
import {test, expect} from '@playwright/test'


//Creación del Test Case:
test ('NOMBRE DEL TC', async({page}) =>{

})


//TC para añadir codigos utiles:
test ('TC de formación', async({page}) =>{

    //añadir pasos definidos en los TEST CASES
    await test.step("este sería el paso 1", async() =>{

    })

    //Crear constante o variable
    const variableDePrueba = "hola"
    
    //Ir a una URL
    await page.goto('http://127.0.0.1:5500/login.html')

    //Localizar un elemento
    await page.locator('input#username')
    //rellenar un texto
    await page.locator('input#username').fill('user')
    //hacer click
    await page.locator("//button[@type='submit']").click()
    //recuperar el texto del elemento
    await page.locator("//button[@type='submit']").textContent()

    //bucle FOR numérico añadiendo de 1 en 1 hasta el max
    for(let i=1; i<=30; i++){
        let dayString
        //hacer un IF y ELSE
        if(i<10){
            //pasar a STRING y convertir en minúsculas. con UPPER es a mayusculas
            dayString = "0" + i.toString().toLocaleLowerCase()
        }
    }

    //bucle FOR creando una variable, en este caso PRUEBA, y se le irá añadiendo información hasta el numero de la segunda variable del bucle VARIABLEDEPRUEBA
    for(let prueba of variableDePrueba){
        let dayString
        //hacer un IF y ELSE
        if(prueba){
            //pasar a STRING y convertir en minúsculas. con UPPER es a mayusculas
            dayString = "0" + i.toString().toLocaleLowerCase()
        }
    }

    //Hacer scroll down hasta la altura del documento, es decir, el final de la pagina. 
    //Si recarga más info la pagina se puede poner en un bucle para que haga el scroll varias veces
    window.scrollBy(0, document.body.scrollHeight)



    //hacer constantes de LISTA. Al añadir los corchetes se convierte en una lista de datos
    const matches = ["qa", "tester", "automation", "pruebas"]
    const contactsMatch = []
    const allContacts = await page.locator('input#username').all()
    const occupation =""

    for(let contact of allContacts){

        let current = await page.locator("//button[@type='submit']").textContent().then(x => x.toLocaleLowerCase())

        if(current.includes(matches)){

        }
    }

});
