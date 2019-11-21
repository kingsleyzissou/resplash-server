# Graphql Resolvers
This folder is home to all the  graphql resolvers.
The resolvers are responsible for mapping the
queries to the mongoose action required to
retrieve the data.

To add a new resolver, create the file and then import it in the
`index.js` file and add it to the export array. N.B, the export
needs to be an array.