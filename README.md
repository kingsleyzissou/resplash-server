# BSc (Hons.) Applied Computing Level 8 - Assignment 2 - Backend server for SPA.

Name: Gianluca Zuccarelli

## Overview.

The app is essentially a replica of Unsplash.com, using  the unsplash api. Users can create a collection, then search for images and add them to a collection

- Create collection
- Edit collection
- View collection
- Delete collection
- Search for images
- Add images to collection
- Remove images from collection
- View profile

## Setup.

To get started, clone the repo.

Then run:
``` yarn install ```

Then:
``` yarn dev ```

To run test scrips:
``` yarn test ```  or  ``` yarn test --watch```

To run linter:
``` yarn lint ```

## Authentication.

JWT was used to provide authentication between the client and the server. Initial authentication was done with standard http requests to the server. Apollo Server context was used for the middleware to protect GraphQL endpoints.

## Schema.

The backend makes heavy use of schema, firstly for Mongoose and the MongoDB backend. Secondly, all the GraphQL queries, mutations are defined before queries can be run.

The the core schemas were as follows:

- Collection
	- User
	- Comments
	- Images
- Comment
	- User
	- Comments
- User

## Testing.

The backend makes use of jest to carry out the unit tests. The unit tests test basic functionality of the backend as well as the API endpoints.

## CI/CD.

Circleci was used for the ci/cd pipeline. On completion of the tests, the app was deployed to a DigitalOcean droplet.

## Independent learning.

Instead of building a REST api, I opted to use GraphQL with Apollo Server to query the backend from the client. The GraphQL playground can be found by running the server locally and navigation to ``` http://localhost:4000/graphql ```
