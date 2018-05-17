# Project Overview

This is a web-based application that reads RSS feeds. The original application is written by Udacity. I used Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## Getting Started

You can simply fork the repo [here](https://github.com/ucanfil/Feedreader) and add additional unit tests.

## Prerequisities

You just need a modern browser to run the application. Open up index.html file in your browser.

# Which unit tests are implemented?

1. RSS Feeds test tests to make sure that the allFeeds variable has been defined and that it is not empty.
2. A test that loops through each feed in the allFeeds object and ensures it has URL defined and that the URL is not empty.
3. A test that loops through each feed in the allFeeds object and ensures it has name defined and that the name is not empty.
4. A test that ensures the menu element is hidden by default.
5. A test that ensures the menu changes visibility when the menu icon is clicked.
6. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
7. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

# Tests Built With

[Jasmine](https://github.com/jasmine/jasmine) framework

# Tests Are Written By

Burak Tilek - [ucanfil](https://github.com/ucanfil)

# Acknowledgements

Feedreader app from [udacity](https://github.com/udacity/frontend-nanodegree-feedreader)