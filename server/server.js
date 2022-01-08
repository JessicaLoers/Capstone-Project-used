import express from 'express';
import { dirname } from './lib/pathHelpers.js';
import path from 'path';

let subscribers = [];
const __dirname = dirname(import.meta.url);

const server = express();

server.use(express.json());