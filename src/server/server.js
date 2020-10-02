import React from 'react'
import { renderToString } from 'react-dom/server';
/*import useInitialState from '../frontend/hooks/useInitialState'*/
import App from '../frontend/App.js';

import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();

const{ ENV, PORT } = process.env;
const app = express();

if(ENV === 'development') {
    console.log('Development config')
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: PORT, hot: true };

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler))
} else{
    app.use(express.static(`${__dirname}/public`));
}

const setResponse = (html) => {
    return(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Web site created using create-react-app"
            />
            <link  rel="stylesheet" href="assets/styles/styles.styl" type="text"/>
            <title>Breaking Bad Characters</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="assets/app.js" type="text/javascript"></script>
        </body>
        </html>
    `)    
}

const renderApp = (req, res) => {
    const html = renderToString(
        <App/>
    );
    res.send(setResponse(html))
}

app.get('*', renderApp);

app.listen(PORT, (err) => {
    if(err) console.log(err);
    else console.log('Server running on port 3000')
})