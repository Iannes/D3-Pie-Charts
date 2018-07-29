## Installation
```
Run npm install or yarn from the root directory.
```
To run the server, type `npm run start` or `yarn start`. This will fire up the dev server on `http://localhost:8080/'

To run the Jasmine test, type `npm run test` or `yarn test`.

### Dev Dependencies
- App fetches data from a mock server using `json-server` dependency.
- `Babel` for latest features
- `Jasmine` for unit testing
- `Webpack`

### Todos
- Center pie charts and make component more accurate according to initial design
- Install dotenv and set `base_url` according to environment
- Make component responsive
- Refactor `drawGraph.js` so it draws nested svgs in pie charts
- Refactor `repeat.js` helper function so it can repeat `cross` function