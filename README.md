[![Build Status](https://travis-ci.org/zrrrzzt/gun-next-example.svg?branch=master)](https://travis-ci.org/zrrrzzt/gun-next-example)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# gun-next-example

Example app with [GUN](https://github.com/amark/gun) and [Next.js](https://github.com/zeit/next.js)

See it live [gun-next.example.allthethings.win](https://gun-next.example.allthethings.win)

## Setup

Clone the repo and install dependencies

```bash
$ npm install
```

## Start

Start the dev server

```bash
$ npm run dev
```

Visit [localhost:3000](http://localhost:3000) to see it.

Click on the link on the bottom of the page to visit the random generated area for sync of a number.

Open the same url in different browsers and on different machines to see the sync in action.

## Export

To export the app to a static server

```bash
$ npm run export
```

Deploy the `out` folder wherever you like

## Vercel

If you use [vercel](https://vercel.com) it's even easier to deploy the app

Update [vercel.json](vercel.json)

```bash
$ npm run deploy
```

## License

[MIT](LICENSE)
