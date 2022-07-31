# App Idea

Twooter - react

# User stories

User Story | Job Story
as a <role> | When I <action>
I want <goal> | I want <goal>
so that <gain> | so that <gain>

## Story 1 (User):

As a user,
I want create a user.
so that I can write twoots.

When I create user
I can change my name, avatar and post twoots.

# Story 2 (Creating Twoot):

As a user,
I want to write a new twoot
so that I can post my twoot.

When I create my own twoot 
have to have max 140 characters 
counter must update during typing.

# Story 3 (Twoots):

As a user,
I want to see my and other twoots
so that I react to like, save or re-twoot and see when was twoot posted (days).


# Data Structure

```js
//profile
const profile  = {
    id:0,
    author:'',
    authorSlug:'',
}
//new twoot
const newTwoot = {
    id:0,
    author:'',
    content:'',
    authorSlug:'',
    dateAdded:'',
    
}
//twoot
const twoot = {
    id:0,
    author:'',
    content:'',
    authorSlug:'',
    dateAdded:'',
}
```

# HTML Structure

- body
  - header
    - h1 title
    - button write a new twoot  
  - main
    - section profile
      - img avatar
      - h2 name & surname
      - button edit name
      - p @name-surname
    - section new twoot
      - form new twoot
        - input text
        - the capable number of input
        - submit button
    - section twoot table
      - table

# Component Structure

- App
  - Header
  - Main (profile, new twoot, twoot table)
    - Profile
    - New twoot
    - twoot table
      - twoots


# Data Map