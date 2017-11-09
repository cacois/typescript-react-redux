<<<<<<< Updated upstream
# What we're going to build

Starting from the `start` branch, which I've paired down, we're going to add a stateful counter to the main page. 
=======
<<<<<<< Updated upstream
# Typescript + React + Redux
=======
# What we're going to build

Starting from the `start` branch, which I've paired down, we're going to add a stateful counter to the main page. So clone the repo, and checkout the `start` branch:

    $ git clone https://github.com/cacois/typescript-react-redux
    $ git fetch && git checkout start
>>>>>>> Stashed changes

First, build and start the app:

    $ npm run build
    $ npm start

Start in index.html - everything always starts with index.html. It lays out the highest level DOM structure and includes 

    <div id="redux-app-root"></div>
    
which just puts in a specific div we can hook into later. Then it does this:

    <script src="dist/bundle.js"></script>

which loads in all of the JS our app has been bundled into.

You should see a blank page with the title "Counter Demo". We're going to make that title true. 


# The original tutorial
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

All the concepts and tooling you'll need to get started, packed into one tiny
counter.

With step-by-step instructions:

  1. [TypeScript and Redux: getting started][article-1] ([c75b9f2](https://github.com/rjz/typescript-react-redux/commit/c75b9f2))
  2. [TypeScript and Redux: adding React][article-2] ([c75b9f2](https://github.com/rjz/typescript-react-redux/commit/c75b9f2))
  3. [TypeScript and Redux: async actions][article-3] ([92ef3b0](https://github.com/rjz/typescript-react-redux/commit/92ef3b0))
  4. [TypeScript and Redux: unit testing with Jest][article-4] ([84ff69b](https://github.com/rjz/typescript-react-redux/commit/84ff69b))
  5. [Integrating TypeScript and redux-thunk][article-5] ([4859392](https://github.com/rjz/typescript-react-redux/commit/4859392))
  6. [DRY-ing up with higher order components][article-6] ([002e3bd](https://github.com/rjz/typescript-react-redux/commit/002e3bd))

And a live [demo][demo].

## Usage

Install and build demo application:

    $ npm install
    $ npm run build
    $ npm start

...now open http://localhost:8080 to see the counter in action!

## Tests

[![Build Status](https://travis-ci.org/rjz/typescript-react-redux.svg?branch=feature%2Fci)](https://travis-ci.org/rjz/typescript-react-redux) [![Coverage Status](https://coveralls.io/repos/github/rjz/typescript-react-redux/badge.svg?branch=feature%2Fci)](https://coveralls.io/github/rjz/typescript-react-redux?branch=feature%2Fci)

    $ npm test

## Issues?

[Let's solve 'em!](https://github.com/rjz/typescript-react-redux/issues/new)

## License

MIT

[demo]: https://rjz.github.io/typescript-react-redux
[article-1]: https://rjzaworski.com/2016/08/getting-started-with-redux-and-typescript
[article-2]: https://rjzaworski.com/2016/08/typescript-redux-and-react
[article-3]: https://rjzaworski.com/2016/09/typescript-redux-async-actions
[article-4]: https://rjzaworski.com/2016/12/testing-typescript-with-jest
[article-5]: https://rjzaworski.com/2017/01/typescript-redux-thunk
[article-6]: https://rjzaworski.com/2017/09/typescript-react-compose
