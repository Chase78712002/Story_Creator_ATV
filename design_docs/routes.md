# Routes

Use REST
## stories
* [x] B GET     /stories               view all stories on homepage  

* [x] R GET     /stories/:id/          view a specific story inside the corresponding story id page
    * [ ] B GET             /contributions          view a list of contributions inside the given story id page

* [x] E PUT   /stories/:id/          edit a specific story inside the coresponding story id page
    * (stretch) E PUT   /contributions/:id      edit a specific contribution

* [x] A POST    /stories/:id           create a story. a randomized id will be generated and assigned to the story once created
    * [ ] A POST            /contributions/:id    create a contribution

## Stretch
* R GET     /my_stories/           logged in user can see all of their saved stories.
* A POST    /my_stories/:user_id   a logged-in user can save a story to their list (user_id in session)   
* D DELETE  /stories/:id/
* D DELETE  /contributions/:id/
