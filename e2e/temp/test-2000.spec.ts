import { test, expect, chromium } from '@playwright/test';
test.setTimeout(100000);

test('test', async () => {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://dev.playpod.ir/');
    await page.click('"ورود"');
    await page.waitForNavigation()
    await page.waitForLoadState()

    await page.screenshot({ path: './test/screenshots/aaaprofile.jpg' });

});