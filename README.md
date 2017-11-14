# A Brief Hands-on Tutorial for React/Redux in Typescript

## What we're going to build

Starting from the `start` branch, which I've cut down to bare bones, we're going to add a stateful counter to the main page. So clone the repo, and checkout the `start` branch:

    $ git clone https://github.com/cacois/typescript-react-redux
    $ git fetch && git checkout start

First, build and start the app:

    $ npm i
    $ npm run build
    $ npm start

If you want to set up a webpack watcher to reload when files are changed, run the following alongside `npm start` in another terminal/tab:

    $ npm run watch

Start in index.html - everything always starts with index.html. It lays out the highest level DOM structure and includes 

    <div id="redux-app-root"></div>
    
which just puts in a specific div we can hook into later. Then it does this:

    <script src="dist/bundle.js"></script>

which loads in all of the JS our app has been bundled into.

You should see a blank page with the title "Counter Demo". We're going to make that title true. The intent is to have a counter displayed on the page, and two buttons: increment and reset. These buttons should cause the appropriate actions.

You will need to add the following to the codebase:

* a Counter _Component_
* A counter _Reducer_
* _Action Types_ and _Action Creators_ for your counter actions

## License

MIT
