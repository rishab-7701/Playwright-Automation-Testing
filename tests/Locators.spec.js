//const {test,expect} = require('@playwright/test');
// another way of importing the test and expect packages from @playwright/test

import {test,expect} from '@playwright/test'

test('Locators',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    // await page.locator('id=login2').click()
    // Simple syntax

    await page.click('id=login2')

    // now we need to locate username and password fields and then enter the value
    await page.fill("//input[@id='loginusername']",'rishab123')

    await page.fill("//input[@id='loginpassword']",'rishab@123')

    //click login button
    await page.click("//button[normalize-space()='Log in']")

    const logoutLink = await page.locator('id=logout2')

    await expect(logoutLink).toBeVisible();

    page.close();

})