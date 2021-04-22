import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const express = require('express');
// const app = express();
// const mysql = require('mysql');
// const core = require('core');

// app.use(core());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: "db",
//     user: "user",
//     password: "test",
//     database: 'myDb'
// });

// app.post('/update', (req, res) => {
//     const name = req.body.name
// });

const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'test',
  database: 'myDb'
});
db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
