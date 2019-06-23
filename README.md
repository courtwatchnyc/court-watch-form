This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How I made decisions

Setting up an Express Server. I ran into an issue setting up the server and then learned to use a class via a tutorial.

### File Structure

Front-end located in /src
Back-end located in /server

Server is seperated in a few places

middleware functions are located in server/middleware
exceptions are locations server/exceptions

interfaces are located in root directory under /interfaces

### There could be issues here:

I don't really understand tsconfig.json and package.json. Specifically the include portion of tsconfig

"include": [
    ["src", "./src/**/*", "server"]
  ]

