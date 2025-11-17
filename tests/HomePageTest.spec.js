const { test,expect } = require('@playwright/test');

test('Home Page',async ({page})=>{
     await page.goto('https://www.demoblaze.com/index.html'); // this statement will wait till the page is loaded -> bcoz we have used await keyword
    //  async keyword makes sure that the function return a promise

    // 2 Tests -> I want to verify the title of the webpage and url of the webpage

    const pageTitle = page.title();
    console.log('Page title is:', pageTitle);

    // to apply the validation we use the keyword expect (it is function we need to pass whatever we need to validate)

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log('Page URL is',pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();

})