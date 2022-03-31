const playwright = require('@playwright/test');

(async () => {

    //Code execution happens within in here
    const browser = await playwright["chromium"].launch({
        headless: false
    });

    //context
    const context = await browser.newContext();

    //page
    const page = await context.newPage();

    //navigate to the page
    await page.goto("http://opencart.abstracta.us/index.php?route=common/home");

    await page.click('text=MacBook');

    await page.click('id=button-cart',  {delay:2000});

    console.log("fff" + await page.locator('Success: You have added MacBook to your shopping cart!'))

    // await page.click('id=cart-total');

    // await page.screenshot({path: `ea-${Date.now}.png`});

    //await browser.close();

})();