

## API Challenge for Fullstack Engineer @SiteMates 👩🏼‍🚀

Hey 👋  Thank you for taking the time to review my work 🙂

### Description

- Build REST API server to operate CRUD and should be able to return static JSON.
- Build REST API client for a web app that connects to each server endpoint and prints out the response. 


### Frameworks

- [Nest](https://nestjs.com) framework for `server side`.
- [Angular](https://angular.dev/) framework for `client side`.


### Requirements checked as shown in Loop record
- Client and server should communicate together.
- The API should be designed to be extensible. 
- Git and Loom record


### Issues Server Endpoints with http://localhost:3000

- `GET /issues`: Fetch all issues
- `GET /issues/:id`: Fetch an issue by ID
- `POST /issues`: Create a new issue
- `PATCH /issues/:id`: Update an issue by ID
- `DELETE /issues/:id`: Delete an issues by ID

### Issues Client Endpoints with http://localhost:4200

- `/issues/home`: Fetch all issues and button for delete
- `/issues/edit/:id`: Fetch an issue by ID for edit
- `/issues/create`: Create a new issue

## Q & A 

### Your technology choices? 
- Both NestJS and Angular are built with TypeScript and enables seamless integration regarding their similar structures. 
- Both frameworks use a modular system that helps to organize the codebase with reusable components and idea of separation of concerns and OOP.
___
### Your API design?
- Use RESTful API with CRUD operation 
- Handle response with statusCode and return data object

___
### Any improvements you would like to make?
I know that this solution may not be perfect. If I have  more time further developing it, I would concentrate on these areas:

- Improve API schema error responses to provide a better client experience like alert or pop-up.
- Implement proper authentication using JWT to secure the API.
- Optimize Mongo queries to populate more details.
- Make UI more nice!
- Refine the project structure and layout (some configurations could be cleaned up).
- Provide unit-test and integration test

### Installation

```bash
$ npm install
```

You can install Docker for local db mongo or register Cluster on Mongo Atlas 
```bash
$ docker-compose up
```
## Server 
Available in `site-mates-server` folder
```bash
$ npm install
$ nest start
```

## Client 
Available in `site-mates-client` folder and it's on port `4200`

```bash
$ npm install
$ ng serve
```





