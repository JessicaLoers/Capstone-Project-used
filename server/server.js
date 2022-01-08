import express from 'express';
import { dirname } from './lib/pathHelpers.js';
import path from 'path';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'


import ArtistRoutes from './routes/artist.route.js'
import TrackRoutes from './routes/track.route.js'
import UserRoutes from './routes/user.route.js'

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME
//const dbPort = process.env.SERVER_PORT


dotenv.config()
const serverPort = process.env.SERVER_PORT || 4000
const __dirname = dirname(import.meta.url)
const server = express() // Express-Server erstellen
server.use(cors())

const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`

mongoose.connect(connectionString)

server.use(express.json()) // JSON Body Parser

server.use(express.static(path.join(__dirname, '../client/dist')))
server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'))
});


server.use('/api', [ArtistRoutes, TrackRoutes, UserRoutes])

server.listen(serverPort, () => console.log('Server "used" is up an running'))