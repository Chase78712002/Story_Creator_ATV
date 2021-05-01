# ATV's Story Creator

## Stack Requirements
### Your projects must use:
  * ES6 for server-side (NodeJS) code
  * NodeJS
  * Express
  * RESTful routes
  * One or more CSS or UI "framework"s:
  * jQuery
  * A CSS preprocessor such as SASS, Stylus, or PostCSS for styling -- or CSS Custom properties and no CSS preprocessor
  * PostgreSQL and pg (with promises) for DBMS
  * git for version control
#### Optional Requirements
  SPA (Single-Page Application) Behaviour
  Hosting, such as heroku, netlify, github pages, AWS, or Azure

## Project Requirements

* authorized users can start a story
* users can add contributions to an existing story
* users can upvote a contribution
* users can see upvotes of a contribution
* creator of story can accept a contribution; this merges it to the rest of the story
* creator of a story can mark the story completed
* users can view a list of stories on the homepage along with their status e.g. in progress or completed
* users cannot add to a completed story
* users can read a story

## Data to display
   - Stories feed (complete or incomplete)
    - Associated contributions with ratings
    - Flag showing if story is complete or incomplete

## Data to collect
   * If user is not logged in, prompt them to log in to create a new story
   * If user is logged in, prompt user to post new story
   - New stories
   - Story contributions
   - Upvotes

## EJS v single page
   - Homepage uses ajax for new stories
   - EJS template for viewing individual stories 