## Installation
```
Run npm install or yarn from the root directory.
```
To fire up the dev server on `http://localhost:8080/`, type `npm run start` or `yarn start` from the app's root directory.

To run the Jasmine tests, type `npm run test` or `yarn test`.

### Dev Dependencies
-  App fetches data from a mock server using `json-server` dependency.
- `Babel` for latest JavaScript features
- `Jasmine` for unit testing
- `Webpack`


### Folder Structure
The components folder are being passed to the `app.js` file.

The `main.js` file is where the `init()` method is called.

```shell
app/      # → Root folder
├── lib/
    └── components/ # → Components are being called within app.js file
    └── helpers/
    └── views/
    └── app.js
└── main.js
public/
spec/
index.html
```

### Todos

- Draw nested svgs in pie charts
- Refactor `cross.js` function
