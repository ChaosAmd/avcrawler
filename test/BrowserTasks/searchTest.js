const { assert } = require('chai');
const BrowserSearch = require('../../src/BrowserTasks/BrowserSearch');
const puppeter = require('puppeteer');

describe('BrowserSearch function test', async (done) => {

    let page;
    let browser;

    before(async () => {
        browser = await puppeter.launch();
        page = await browser.newPage();
        await page.goto('http://www.avchap.com.br/site/horarios/');
        await page.setViewport( { width: 1920, height: 1040} );
    });

    after(async () => {
        await browser.close();
    });

    // Data gathered from manual browsing
    it('Asserts that the length of the data required is correct', async () => {
        const hrefsArrays = await BrowserSearch(page);
        assert.lengthOf(hrefsArrays, 13, 'Wrong size error');
    })

});