const puppeteer = require('puppeteer');
const browserSearch = require('./BrowserSearch');

const avchapUrl = 'http://www.avchap.com.br/site/horarios/';

async function browserNavigator () {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(avchapUrl);

    const hrefs = await browserSearch(page);

    await browser.close();
}

module.exports = browserNavigator;