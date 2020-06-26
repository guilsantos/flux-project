# Flux project

## Getting started

To start this project just start the docker container

### `$ docker-compose up dev`

And open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `$ docker-compose up test`

Terminal whil stay looking for modifications in the code to run the tests.

### `$ docker-compose up prod`

Building the project to production on port 3001, served with nginx.

## Docker commands

You can build the dev image whith

```$ docker build -t flux-app:dev .```

Spin up the container

```$ docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true flux-app:dev```

Build with docker-compose

```$ docker-compose up -d --build```

Runing with compose

```$ docker-compose up```

## Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
