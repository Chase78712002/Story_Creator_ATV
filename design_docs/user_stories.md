# User Stories/Scenarios

## Instructions

1. A user story describes how users will interact with your application

  - They have the form: As a **_, I want to _, because \_\_**.
  - eg. As a user, I want to be able to save posts, because I want to review them later.

2. User stories can also be negated: As a **, I shouldn't be able to _, because _**.

  - eg. As a user, I shouldn't be able to edit other users posts, because I don't own those posts.

3. A user scenario is a syntactic alternative to user stories

  - They have the form: Given **, when \_, then \_\_**.
  - eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites.

4. You can also chain on an and to user stories/scenarios

  - eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites and the save icon will change to indicate success.

## App Scenarios

### Story Creators

- Given that I am a **_story creator_**, when _I click into my story_, then
  - [ ] I'll see all the contributions to my story and votes.
  - [ ] I can choose which contribution to accept to my story and merge it.
  - [ ] I have the option to mark the story completed.

### Contributors/voters

- Given that I am a **_contributor/voters_**
  - when _I click on a story_, then
    - [ ] I'll be directed to another page where I see the whole story and be able to contribute/vote. and see the votes
    - [ ] I'll see the contributions below the story.
    - [ ] I'll see a textbox below the contributions where I can enter the story and submit the contribution for others to vote on.
  - when I click the **My Contributions** button, then
    - [ ] I'll be directed to another page where I get to see all of my contributions.
  - when I see a story that is **_marked completed_**, then
    - [ ] I should NOT be able to contribute to that story.

### Homepage browsing

- Given that I am just **_browsing the homepage_**, 
  - when I scroll down, then 
    - [ ] I can see a list of stories with their status: "in progress" or "completed"
    - [ ] I will see a Go To Top button at the corner.
  - when I click on the **Create Story** button, then
    - [ ] I'll be directed to another page where I can create a new story.
