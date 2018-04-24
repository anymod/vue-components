# Standalone vue components

The goal of this project is to build a vast library of completely standalone components using Vue.js.

### [Component demo](https://vue-components.herokuapp.com/)

Each component should have its own HTML and CSS fully isolated, with JavaScript dependency only on Vue.js or relevant external library (like Axios).

Because Vue.js is compatible down to IE9, our goal is for most or all of these components to also be compatible down to IE9.

## Usage

To run the server locally, clone this repo and run

```
npm install
npm start
```

To compile changes in realtime, run `gulp watch`.

Assets are served from the `/dist` directory, but you should only make changes in the `/src` directory (then sync them with `gulp build` or `gulp watch`).

## Contributing

Right now we're interested in adding components that will be of virtually any use, and we will figure out the organization structure as we go.

Feel free to submit PRs with new component ideas, edits to existing components, or fully fleshed out components you've built.  

We can build more together.

## Stay In Touch

For latest releases and announcements, follow on Twitter: [@anymod_team](https://twitter.com/anymod_team)

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2016-present, Anymod
