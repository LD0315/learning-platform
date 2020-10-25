const jwt = require('jsonwebtoken');

const secret = 'long secret';

const token = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNjAzNTk0ODk5LCJleHAiOjE2MDM2ODEyOTl9.b6QhnoaD2V4LJ2cXM4vflWyG4KAlWq1JlkNKLmanBQE"

const valid = jwt.verify(token, secret);

console.log(valid);