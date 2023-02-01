Feature: Search Feature

    I can search and found data from website

    Scenario: Valid Search
    Given User visit website
    When User can search he want
    Then User can see data

    Scenario: Invalid Search
    Given User visit website2
    When User can search what she want
    Then User can see data error