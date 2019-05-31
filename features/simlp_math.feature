Feature: Is it Friday yet?
    Everybody wants to know when it's Friday

Scenario Outline: Today is or is not Friday
    Given something
    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

Examples:
    | day            | answer |
    | Friday         | TGIF   |
    | Sunday         | Nope   |
    | anything else! | Nope   |

Scenario: easy maths
    Given a variable set to 1
    When I increment the variable by 1
    Then the variable should contain 2

Scenario Outline: much more complex stuff
    Given a variable set to <var>
    When I increment the variable by <increment>
    Then the variable should contain <result>

Examples:
    | var | increment | result |
    | 100 |         5 |    105 |
    |  99 |      1234 |   1333 |
    |  12 |         5 |     18 |