const $ = require('cheerio');

async function browserSearch(page) {
    const searchInputId = '#filter-search-routes-text';
    const searchVal = 'Universidade Federal';

    await page.focus(searchInputId);
    await page.keyboard.type(searchVal);

    const content = await page.content();

    return $('.results li:not([style*="display: none"])', content)
        .find('a')
        .toArray()
        .map(obj => obj.attribs.href);
}

module.exports = browserSearch;