Feature: Browser Title
    Validate the web-site browser title
    
    Scenario: View the web-site
        Given the loaded web-site
        Then the browser title should be 'Individual Project'

    # Scenario: View the CV
    #     Given the loaded web-site
    #     When CV is clicked
    #     Then the new URL is file:///C:/Users/abdullah.darsot/Documents/HtmlIndividualProject/cv.pdf