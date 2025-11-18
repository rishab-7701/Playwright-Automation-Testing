const {test,expect} = require('@playwright/test')

test('Assertions Prac',async({page})=>{
   await page.goto('https://demo.nopcommerce.com/register')

   // expect(page).toHaveURL() -> to check whether the URL of the page is correct or not

   await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
   
   //  expect(page).toHaveTitle()	--> to check whether the Page has title

   await expect(page).toHaveTitle('nopCommerce demo store. Register')

   // expect(locator).toBeVisible()		Element is visible
   const logoElement = page.locator('.header-logo')
   await expect(logoElement).toBeVisible();
   
   // expect(locator).toBeEnabled()		Control is enabled
   const searchBox = page.locator('#small-searchterms')
   await expect(searchBox).toBeEnabled();

   //expect(locator).toBeChecked()		Radio/Checkbox is checked
   const maleRadioButton = page.locator('#gender-male')
   await maleRadioButton.click()
   await expect(maleRadioButton).toBeChecked();

   const newsLetter = page.locator('.form-check-input')
   await expect(newsLetter).toBeChecked();

}) 