//import cucumber from "@cucumber/cucumber";
//const cucumber = require('@cucumber/cucumber');
const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require( "../../pages/HomePage");

//var homePage = new HomePage();

Given('Navigate to LloydsBank.com', async function () {
    await HomePage.navigateToLloyodsHomePage();
  });

  Then('Verify that the title of the page is {string}', async function (title) {
    await HomePage.verifyTitle(title);
  });

  Given('Set the Location coordinates', async function () {
    const coords = { latitude: 53.480759, longitude: -2.242631 };
    context.setGeolocation(coords);
  });

  Then('Enter {string} on the Search Bar input', async function (searchBranch) {
    await HomePage.conductSearchBranch(searchBranch);
  });

  Given('Verify the title', async function () {
    var locationTitle = await page.title();
    await HomePage.verifyTitleOfLocationPage(locationTitle);
  });

  Then('Accept the cookies on the page', async function () {
   await HomePage.acceptCookiesOnPage();
  });

  When('Click on the first Branch from the search results', async function () {
    await HomePage.clickFirstBranch();
  });


  Then('Click on View Branch', async function () {
   await HomePage.clickViewBranch();
  });

  When('Verify the Name and Address of the Branch', async function () {
    await HomePage.verifyNameLocation();
  });

  
  Then('Verify the Days the Branch is closed', async function () {
   await HomePage.verifyBranchClosed();
  });

