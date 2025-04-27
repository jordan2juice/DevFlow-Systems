'use strict';

const mongoose = require('mongoose');

const DB = process.env.DB;

async function mongooseConnect() {
    await mongoose.connect(DB);
    console.log('Connected to database');
}

module.exports = mongooseConnect;