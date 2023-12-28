const axios = require('axios');
const { response } = require('express');
const url = 'http://127.0.0.1:3000/membership_api/'

axios.get(url + '0001')
    .then(function(r) {
        console.log("#1 Code:", r.status, ">>", "JSON:", r.data, ">>", "JSON Result:", r.data['0001']);
    });

axios.post(url + '0001', {value: 'apple'})
    .then((r) => {
        console.log("#2 Code:", r.status, ">>", "JSON:", r.data, ">>", "JSON Result:", r.data['0001']);
    });

axios.get(url + '0001') 
    .then((r) => {
        console.log("#3 Code:", r.status, ">>", "JSON:", r.data, ">>", "JSON Result:", r.data['0001']);
    });

axios.post(url + '0001', {value: 'xpple'})
    .then((r) => {
        console.log("#4 Code:", r.status, ">>", "JSON:", r.data, ">>", "JSON Result:", r.data['0001']);
    });
    
axios.put(url + '0002', {value: 'xrange'})
    .then((r) => {
        console.log("#5 Code:", r.status, ">>", "JSON:", r.data, ">>", "JSON Result:", r.data['0002']);
    });

axios.post(url + '0002', {value:"xrange"});
axios.put(url + '0002', {value: 'orange'})
    .then((r) => {
        console.log("#6 Code:", r.status, ">>", "JSON:", r.data, ">>", "JSON Result:", r.data['0002']);
    });

axios.delete(url + '0001')
    .then((r) => {
        console.log("#7 Code:", r.status, ">>", "JSON:", r.data, ">>", "JSON Result:", r.data['0001']);
    });

axios.delete(url + '0001')
    .then((r) => {
        console.log("#8 Code:", r.status, ">>", "JSON:", r.data, ">>", "JSON Result:", r.data['0001']);
    });
