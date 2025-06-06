'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());

