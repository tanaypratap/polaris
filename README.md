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


### Running the client and server
Currently client and server are two disjointed pieces. However, soon server will be serving the client in dev as well as in prod mode. 
For now, if you want to run server (which has no useful code), use `npm run start:server` at project root.
The client is setup only for development currently, if you want to run it to see the output use `npm run start` at project root.

### Testing setup for Polaris

Polaris uses Jest for server side testing and Jest & Enzyme to test the React components. To enable Jest with typescript, a jest config file is included in the root directory, where various options are set to suit the needs of the project. Besides, Enzyme is being used as it is an exclusive testing utility for React which makes it easier to assert and manipulate component's output, thereby making testing client side code less cumbersome. 

### How to run tests

`npm run test`        - To run all the unit tests in client & server both.
`npm run test:server` - To run only server unit tests
`npm run test:client` - To run only client unit tests
`npm run test:watch`  - To run jest in watch mode

To debug the individual tests, run the vscode debugger with `Run Unit Tests In Current File` configuration.

### How to add tests

Add your test file in the following format [filename].spec.ts/tsx or [filename].test.ts/tsx in the __tests__ folder in **./client** for client side & in **./_server** for server side tests. A sample test file has been written in the corresponding folders.

### Documentation
Separate folder is created for docs and all documentation related to a functionality/library/tech should go into proper folder.
A link should be added here, for example:
#### PWA

* [Resources for making a React App PWA](./docs/pwa/resources.md)