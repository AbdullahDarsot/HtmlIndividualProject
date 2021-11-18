Feature: Change between "index" page to "newsletter" page

    Scenario: change page
    Given the loaded web-site
    When changePage on hyperlink clicked
    Then the browser title should be 'My Newsletter'