# Entry point
The entry point for the app is the `index.js` file.

To break this file up and avoid a monolith, 
the adding of the server dependencies are
extracted to the `server.js` file.

Extra dependencies can be added to the
`server.js` file anywhere above the following line:<br>
```return app.use(routes(router));```

The graphql playground can be accessed by navigating to the server route `/graphql` e.g. `http:localhost:4000/graphql` locally.
