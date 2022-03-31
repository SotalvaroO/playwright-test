const { test, expect } = require("@playwright/test");

test("should login", async ({ page }) => {
  await page.goto(
    "https://opencart.abstracta.us/index.php?route=account/login"
  );
  await page.type("[id=input-email]", "seminariovozipsotalvaroo@gmail.com");
  await page.type("[id=input-password]", "Prueba3317");
  await page.keyboard.press("Enter", { delay: 2000 });
  await page.click("text=Edit Account");
  await expect(page).toHaveURL(
    "https://opencart.abstracta.us/index.php?route=account/edit"
  );
});

test("should add to shopping kart", async ({ page }) => {
    await page.goto("http://opencart.abstracta.us/index.php?route=common/home");

    await page.click('text=MacBook');

    await page.click('id=button-cart',  {delay:2000});

    expect(JSON.parse(JSON.stringify(page.locator('Success: You have added MacBook to your shopping cart!')))._selector).toEqual("Success: You have added MacBook to your shopping cart!");
  });

test("should logout", async ({ page }) => {
  await page.goto(
    "https://opencart.abstracta.us/index.php?route=account/login"
  );
  await page.type("[id=input-email]", "seminariovozipsotalvaroo@gmail.com");
  await page.type("[id=input-password]", "Prueba3317");
  await page.keyboard.press("Enter", { delay: 2000 });

  await page.goto(
    "https://opencart.abstracta.us:443/index.php?route=account/logout"
  );

  await expect(page).toHaveURL(
    "https://opencart.abstracta.us/index.php?route=account/logout"
  );
});
