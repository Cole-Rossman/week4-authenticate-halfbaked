# Why I Autha

## Demo

[Link to Demo](https://alchemy-web-why-i-autha.netlify.app/)

## Getting Started

Use the [this template](https://github.com/alchemycodelab/half-baked-web-01-why-i-autha) to get started.

### Learning Objectives

-   Register new users on Supabase using the Javascript library
-   Authenticate existing users on Supabase using the Javascript library
-   Manage protected and unprotected pages by checking if a user is logged in
-   Use `location` object to redirect users

### Description

For this deliverable you are wiring up Supabase email authentication. You have been given 2 pages -- a home page at `/` and another page at `/other-page`. The home page should only be accessible when the user is not logged in - otherwise it should redirect to `/other-page`. `/other-page` should only be accessible when the user is logged in, otherwise it should redirect home.

### Acceptance Criteria

-   Users should be able to sign in to an existing account
-   Users should be able to add a new account
-   Authenticated users should be able to visit another page
-   Authenticated users should be redirected to other page if they visit the home page
-   Users should be able to logout from the other page and be redirected back to the home page

### Rubric

| Task                                                                           | Points |
| ------------------------------------------------------------------------------ | ------ |
| ** Deploy Requirements **                                                      |        |
| Main branch deployed to Netlify                                                | 0      |
| Open PR from `dev` branch with Netlify deploy preview                          | 0      |
| ** Code Requirements **                                                        |        |
| Users can sign in and are redirected to other-page                             | 2      |
| Users can register and are redirected to other-page                            | 2      |
| Users can logout from the other page                                           | 2      |
| Authenticated users are redirected to the other page from the home page        | 2      |
| Unauthenticated users are redirected back to the home page from the other page | 2      |
