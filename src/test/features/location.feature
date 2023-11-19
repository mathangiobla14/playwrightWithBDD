
@test
Feature: Search for the Lloyds nearest branch

Scenario: Open Lloyds bank website and verify the Title

Given Navigate to LloydsBank.com
And Verify that the title of the page is 'Lloyds Bank - Personal Banking, Personal Finances & Bank Accounts'


Scenario: Search for the nearest branch

Given Set the Location coordinates
And Enter 'Find a Branch near me' on the Search Bar input


Scenario: Verify the title of the location page 

Given Verify the title
And Accept the cookies on the page
When  Click on the first Branch from the search results
Then Click on View Branch
And Verify the Name and Address of the Branch
And Verify the Days the Branch is closed