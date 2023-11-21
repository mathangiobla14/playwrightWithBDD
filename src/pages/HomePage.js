class HomePage{
    
    constructor(page, firstBranchName){
        this.firstBranchName;
        this.page = page;
         this.branchSearch = page.getByPlaceHolder('Find a branch near me');
        this.acceptCookies =  page.getByRole('button', { name: 'Accept all' });
        this.firstBranchResult = page.frameLocator('iframe[title="Lloyds Bank \\| Search \\| Products\\, Business\\, FAQs and Locations"]').locator('a.HitchhikerLocationStandard-titleLink.js-Hitchhiker-title').nth(0).click();
        this.viewBranch = page.frameLocator('iframe[title="Lloyds Bank \\| Search \\| Products\\, Business\\, FAQs and Locations"]').getByRole('link', { name: 'View branch' }).first().click();
        this.bankName = page.locator('#location-name').locator('span.LocationName-brand');
        this.branchName =  page.locator('#location-name').locator('span.LocationName-geo');
        this.openHoursTable = page.locator("table[class='c-hours-details']");
        this.openHoursCol = openHoursTable.locator('thead tr th');
        this.openHoursRows = openHoursTable.locator('tbody tr');
        this.closedRows = openHoursRows.filter({has:page.locator('td'),hasText:'Closed'})
        this.daysTheBankIsClosed = closedRows.locator('.c-hours-details-row-day')
    }

    async navigateToLloyodsHomePage(){
        await this.goto('https://www.lloydsbank.com/');
    }


    async verifyTitle(title){
        await expect(page).toHaveTitle('Lloyds Bank - Personal Banking, Personal Finances & Bank Accounts');

    }

    async conductSearchBranch(searchBranch){
        await this.branchSearch.fill(searchBranch);
        await this.branchSearch.press('Enter');
    }

    async verifyTitleOfLocationPage(locationTitle){
    console.log('We have arrived on: ' + locationTitle + ' page');
    await expect(page).toHaveTitle(locationTitle);
    }

    async acceptCookiesOnPage(){
        await this.click(this.acceptCookies);
    }

    async clickFirstBranch(){
        firstBranchName = await this.firstBranchName.textContent().then(( branchName) =>{
        console.log(branchName);
        return branchName;
        });
    }

    async clickViewBranch(){
        this.click(this.viewBranch);
    }

    async verifyNameLocation(){
        const bank = await this.bankName.textContent();
        const branch = await this.branchName.textContent();
        await expect(" " +bank.concat(" "+branch)+" ").toBe(firstBranchName);
    }

    async verifyBranchClosed(){
await daysTheBankIsClosed.allTextContents().then((daysClosed)=>{
    console.log(daysClosed)
});
    }
}

module.exports = HomePage;