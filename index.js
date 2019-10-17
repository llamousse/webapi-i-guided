// import express from 'express'; // ES6 Modules
const express = require('express'); // CommonJS Modules, equivalent to above

const server = express();

const port = 8000;
server.listen(port, () => console.log(`\n** API on port ${port} **\n`));

