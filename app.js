const express = require('express');

const albumsRouter = require('./routes/albums') // if you dont specify the file name , it will look for index.js
const artistsRouter = require('./routes/artists') 
const tracksRouter = require('./routes/tracks') 
const themeRouter = require('./routes/themes') 
const mediatype = require('./routes/Media')
const app = express();


app.use('/api/albums',albumsRouter) //when incoming begining path starts with /api/employees use the employee routers
app.use('/api/artists',artistsRouter) 
app.use('/api/tracks',tracksRouter) //when incoming begining path starts with /api/employees use the employee routers
app.use('/api/themes',themeRouter)
app.use('/api/mediatypes',mediatype)

app.use(express.static(__dirname +'/_FrontendStarterFiles')); 
app.use(express.urlencoded({ extended: false })); 



app.listen('3000', () => console.log('we started listening'))