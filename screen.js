const puppeteer = require('puppeteer');
const url = 'https://google.com/'; //process.argv[2];
if (!url) {
    throw "Please provide URL as a first argument";
}
async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: './output/screenshot.png'});
    browser.close();
}
run();