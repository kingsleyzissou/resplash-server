# Entroy point for the server
The entry point for the app is the index file.

To break this file up and avoid a monolith, 
the adding of the server dependencies are
extracted to the app.js file.

Extra dependencies can be added to the
app.js file anywhere above 
`return app.use(routes(router));`
