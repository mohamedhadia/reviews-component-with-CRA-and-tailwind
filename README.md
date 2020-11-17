## as always :

`clone` > `npm install`

## on production remeber to go to tailwiond.config.js file and change this to `true`

purge: {
    `enabled: false`,
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/*.js",
      "./src/**/*.jsx",
    ],
  },

this so you get a very small css file from tailwind , it baisicly deletes the unused styles 
