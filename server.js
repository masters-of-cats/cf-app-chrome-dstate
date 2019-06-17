const puppeteer = require('puppeteer');
const process = require('process');

var browser;

require('events').EventEmitter.defaultMaxListeners = 150000;

process.on('SIGTERM', async ()=> {
  console.info('SIGTERM signal received.');
  await browser.close();
});

process.on('SIGINT', async ()=> {
  console.info('SIGINT signal received.');
  await browser.close();
});

(async () => {

  while (true) {
    browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    var page = await browser.newPage();
    var page1 = await browser.newPage();
    var page2 = await browser.newPage();
    var page3 = await browser.newPage();
    console.info('New Browser');
    for (var i = 0; i < 1000; i++) {
      page.goto('https://cf-controlplaneslotmachine.cfapps.bndl.aws.bndl.sapcloud.io/');
      page1.goto('https://cf-controlplaneslotmachine.cfapps.bndl.aws.bndl.sapcloud.io/');
      page2.goto('https://cf-controlplaneslotmachine.cfapps.bndl.aws.bndl.sapcloud.io/');
      page3.goto('https://cf-controlplaneslotmachine.cfapps.bndl.aws.bndl.sapcloud.io/');
      await page.waitFor(200)
    }
    await page.waitFor(1000)
    await browser.close();
  } 

})();

