const puppeteer = require('puppeteer');

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function sleep(millisecondsCount) {
  if (!millisecondsCount) {
      return;
  }
  return new Promise(resolve => setTimeout(resolve, millisecondsCount)).catch();
}

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com', {
      // waitUntil: 'networkidle2'
    });
    // await timeout(1000);
    await page.waitForSelector('.spinner-border', { visible: true });
    // await page.waitFor(2000);
    await page.waitForSelector('.spinner-border', { visible: false });
    // await sleep(5000);

    // await page.waitForSelector('div:not(.spinner-border)');
    // await page.waitForSelector('.spinner-border');
    // await timeout(5000);
    await page.goto('https://google.com', {
      // waitUntil: 'networkidle0'
      waitUntil: 'networkidle2'
      // waitUntil: 'domcontentloaded'
      // waitUntil: 'load'
    });
    // await timeout(5000);
    // await page.waitForSelector('.auth-option', { visible: true });
    // await page.screenshot({
    //   path: 'example.jpg',
    //   fullPage: true
    // });
    await page.pdf({
      path: 'outputFileName.pdf',
      displayHeaderFooter: true,
      headerTemplate: '',
      footerTemplate: '',
      printBackground: true,
      format: 'A4',
    });
    browser.close();
})();

// const puppeteer = require('puppeteer');

// puppeteer.launch().then(async browser => {
//   const page = await browser.newPage();
//   await page.goto('https://google.com', {
//     waitUntil: 'networkidle2'
//   });
//   await timeout(1000);
//   await page
//     .waitForSelector(() => !document.querySelector('.spinner-border'))
//     .then(() => console.log('got it'));
//     browser.close();
// });
