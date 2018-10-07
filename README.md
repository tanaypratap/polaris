Polaris 2018
=============
Creating a scaffolding for full stack React with TypeScript (striving to put everything in TS), Apollo, GraphQL, Jest, Express, React Router and make them all work cohesively

### Vision
This is a work in progress. Idea is to treat this as scaffolding for future projects.
It will also be a learning of all these technologies in React Ecosystem.

### Technologies to be incorporated
* [React 16.3](https://reactjs.org/)
* [TypeScript (Both on client and server side)](https://www.typescriptlang.org/)
* [React Router 4](https://reacttraining.com/react-router/)
* [PostCSS for CSS](https://postcss.org/)
* [Webpack 4](https://webpack.js.org/)
* [Jest (React Testing)](https://jestjs.io/en/)
* [Apollo](https://www.apollographql.com/)
* [GraphQL](https://graphql.org/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* Testing for Express (not sure which framework to use)


### Running the client and server
Currently client and server are two disjointed pieces. However, soon server will be serving the client in dev as well as in prod mode. 
For now, if you want to run server (which has no useful code), use `npm run start:server` at project root.
The client is setup only for development currently, if you want to run it to see the output use `npm run start` at project root.

### Documentation
Separate folder is created for docs and all documentation related to a functionality/library/tech should go into proper folder.
A link should be added here, for example:
#### PWA

* [Resources for making a React App PWA](./docs/pwa/resources.md)