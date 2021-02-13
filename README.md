# RIRS Restavracija - rezervacije

Razvijamo programsko rešitev za rezervacijo mize v restavraciji in njen preklic.

Users: 

- A guest 
- Owners 

User stories: 

1. As a guest I want to create an account so I can use additional functions **1**
2. As all users I want to login so that I can acces my account **1**
3. As all users I want to sign out, so I can stop using the app **2**
4. As  a guest I want to make a reservation, so I can visit the restaurant **1**
5. As a guest, I want to view my existing reservations, in case I forget where I made my reservation **3**
6. As a guest I want to cancel my reservation, so I let the restaurant know I can’t come **2**
7. As owner I want to view all reservations, so I can plan the schedule **1**
8. As owner I want to confirm reservation to let the guest know they can come **2**
9. As owner I want to cancel a reservation in case tables aren’t free anymore **2**
10. As owner I want to complete the reservations, so I can track succesfully completed reservations **4**


Za določanje prioritet je uporabljena metoda "Priority Poker" z lestvico 1-5, kjer je 1 najpomembnejša prioriteta.

## Main idea and development process

In this project we want developed a software solution for booking a table in a restaurant and canceling it.

Our main goal were to use Scrum agile methodology. So in this project we performed four iteration. Product owners team provided us user stories, which we were analyzed and create product backlog items which we decided to implement. With product owner we determined implementation priority, using method "Priority Poker", and create sprint plan. After every sprint we performed sprint retrospective, where we discussed about our development process, and identifies pros and cons.

For planning tool we use Gitlab Issues tracker, where we defined our backlog tasks and mark with tags which we implement in current sprint.

![Scrum](https://h3z6m7w4.rocketcdn.me/wp-content/uploads/2020/06/Scrum-process-schema-EN-small.png)

## Implementation and tehnology

We implemented our application in two parts. We always try to following to best practices in our development process.

### First part

In first part of our project we implemented mobile application using approach LCNC (Low-Code - No-Code), where we used Power Apps software.

First part technology:
- PowerApps
- Gitlab Issues

### Second part

In second part we implemented web app using Node.js. In process of development our web app we used DevOps practices. So we used contained-based approach with Docker and Gitlab. In Gitlab repository we have *master* and *development* branch which were lock out from pushing changes. So if we want to apply changes locked branches we need to create *merge requests*, which need approved from code reviewer and successfully passed *build* and *test* process.
We implemented CI/CD (Continuous integration / Continuous delivery) in repository using Gitlab. So we write tests in our app which we run in CI step. In CD step we build our application with Docker and save created Docker image in Gitlab Container Registry using Kaniko, then we deploy our Docker image to Heroku cloud.

Second part technology:
- Node.js
- MongoDB
- Gitlab Issues
- Gitlab CI/CD
- Gitlab Container Registry
- Docker
- Heroku
