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
const profile = {
  id: 0,
  author: "",
  authorSlug: "",
  avatar: "",
};
//new twoot
const newTwoot = {
  id: 0,
  author: "",
  content: "",
  authorSlug: "",
  dateAdded: "",
};
//twoot
const twoots = {
  id: 0,
  author: "",
  content: "",
  authorSlug: "",
  dateAdded: "",
};
```

# HTML Structure

- body
  - navbar
    - div
      - table logo and new twoot
  - header
    - div
      - img avatar
      - div
        - span name
        - span surname
        - img (edit btn)
      - div
        - span author slug
    - section new twoot
      - form new twoot
        - div
          - h1 Compose twoot
          - input text
        - div
        - div
          - submit button
          - span the capable number of input
        - div
    - section twoot table
      - table

# Component Structure

- App
  - Header
  - Navbar
  - Twoot
  - Twoots

# Data Map
