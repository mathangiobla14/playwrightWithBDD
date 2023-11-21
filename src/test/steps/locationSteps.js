const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const HomePage = require( "../../pages/HomePage");
const { playwright } =require('@playwright/test');


Given('Navigate to LloydsBank.com', async function () {
   const browser = await playwright.chromium.launch();
   const context = await browser.newContext();
   const page = await context.newPage(); 
    this.homePage = new HomePage(page);
    await this.homePage.navigateToLloyodshomePage();
  });

  Then('Verify that the title of the page is {string}', async function (title) {
    await this.homePage.verifyTitle(title);
  });

  Given('Set the Location coordinates', async function () {
    const coords = { latitude: 53.480759, longitude: -2.242631 };
    context.setGeolocation(coords);
  });

  Then('Enter {string} on the Search Bar input', async function (searchBranch) {
    await this.homePage.conductSearchBranch(searchBranch);
  });

  Given('Verify the title', async function () {
    var locationTitle = await page.title();
    await this.homePage.verifyTitleOfLocationPage(locationTitle);
  });

  Then('Accept the cookies on the page', async function () {
   await this.homePage.acceptCookiesOnPage();
  });

  When('Click on the first Branch from the search results', async function () {
    await this.homePage.clickFirstBranch();
  });


  Then('Click on View Branch', async function () {
   await this.homePage.clickViewBranch();
  });

  When('Verify the Name and Address of the Branch', async function () {
    await this.homePage.verifyNameLocation();
  });

  
  Then('Verify the Days the Branch is closed', async function () {
   await this.homePage.verifyBranchClosed();
  });

