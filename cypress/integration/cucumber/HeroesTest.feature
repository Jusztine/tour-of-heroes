Feature: I want to inspect the Heroes Navbar title, list  with correct spelling and the Navbar list should be clickable to correct route
 
    Background:
        Given I navigate to the Tour of Heroes Website Dashboard

Scenario: Inspect the Navbar component, view its title, list and check the Navbar list
 
        When I visit the Tour-of-Heroes Navbar view the title

        And I click  the Navbar list Dashboard

        Then the browser should navigate to the dashboard page

        And I click the Navbar list Heroes

        Then the browser should navigate to the Heroes list page

        # // hero-detail-test
        When I click one of the list of hero in the Dashboard top 5 or heroes-list

        Then the browser should navigate to the hero-detail page
        
        And  I visit the Hero-Detail with the information of hero: name, id 

        And I change the input field of the hero-name 

        Then the name of the hero should change
