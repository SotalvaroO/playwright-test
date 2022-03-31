const playwright = require('playwright');

(async () => {

    const browser = await playwright["chromium"].launch({
        headless: false,
        slowMo: 10
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewport({
        width:1440,
        height: 9000 
    })

    await page.goto('https://opencart.abstracta.us/index.php?route=account/login');
    await page.type('[id=input-email]', 'seminariovozipsotalvaroo@gmail.com');
    await page.type('[id=input-password]', 'Prueba3317');
    await page.keyboard.press('Enter', {delay:2000});
    await page.click('text=Edit Account')



    //await browser.close();
})();