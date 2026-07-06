const {test,expect} = require('@playwright/test');
//Test using Context and Page
test('My First Playwright Test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractice/');
  console.log(await page.title)
});
//Test without Context and Page
test('My Second Playwright Test', async ({ page }) => {
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto('https://google.com');
  await expect(page).toHaveTitle("Google");
});
test.only('My third testcase',async({page})=>{
  page.on('console', msg => console.log('Browser:', msg.text()));
  await page.goto('https://rahulshettyacademy.com/loginpagePractice/');
  const username=page.locator('#username');
  const password=page.locator('#password');
  const staticDropdown=page.locator('select.form-control');
  const cartItem1='iphone X';
  const cartItem2='Nokia Edge';
  await username.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  await page.locator('span.checkmark').nth(1).click();
  await page.evaluate(() => {
  document.querySelectorAll("p").forEach(p => {
    if (p.textContent.includes("You will be")) {
      console.log(p.textContent);
    }
  });
});
  await page.locator('#okayBtn').click();
  await staticDropdown.selectOption("teach");
  await page.locator('#terms').click();
  await page.locator('#signInBtn').click();
  //await page.pause();
  //Adding Cart to the items
  await page.locator('.card-body .card-title a').nth(1).waitFor(); //Used to wait until the next page loads
  const cartItems=await page.locator('.card-body .card-title a').allTextContents();
  console.log(cartItems);
  const cartItemssize=await cartItems.length;
  for(let i=0;i<cartItemssize;i++){
    //console.log(cartItems[i]);
    if(cartItems[i]===cartItem1 || cartItems[i]===cartItem2){
      await page.locator('.btn.btn-info').nth(i).click();
    }
  }
  await page.locator('.nav-link.btn.btn-primary').click();
  await page.locator('table tbody').first().waitFor();
  //Automating table scenario
  const addedCartItems=await page.locator('.media-body h4 a').allTextContents();
  console.log(addedCartItems);
  const expectedItems = [ 'iphone X', 'Nokia Edge' ];
  if (expectedItems.every(item => addedCartItems.includes(item))) {
  console.log("True");
  }
});