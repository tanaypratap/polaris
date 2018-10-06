## Testing setup for Polaris

Polaris uses Jest and Enzyme to test the React components. To enable Jest with typescript, a jest config file is included in the root directory, where various options are set to suit the needs of the project. Besides, Enzyme is being used as it is an exclusive testing utility for React which makes it easier to assert and manipulate component's output, thereby making testing client side code less cumbersome. 

### How to run tests

yarn test

### How to add tests

Add your test file in the following format [component].spec.tsx or [component].test.tsx in the __tests__ folder in **./client**  directory corresponding to your component. A sample test file has been written corresponding to a sample component. 