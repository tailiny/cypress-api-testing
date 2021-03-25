Feature: Manipulate new user and validate your behavior

Scenario: Create new user with success
    Given "create" an user
    When send the "POST" waiting response code "201"
    Then the user was "created" with success

Scenario: Update the user name with success
    Given "update" an user
    When send the "PUT" waiting response code "200"
    Then the user was "updated" with success

Scenario: Delete the user with success
    Given "delete" an user
    When send the "DELETE" waiting response code "204"
    Then the user was "deleted" with success