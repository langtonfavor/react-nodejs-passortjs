import express from 'express';

let app = express();

app.get('/', (req, res, next) => res.send('heloo from nodejs'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`the program is running on ${PORT}`));