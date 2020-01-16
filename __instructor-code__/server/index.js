const express = require('express'),
      cors = require('cors'),
      grassCtrl = require('./controllers/grassCtrl'),
      pokeCtrl = require('./controllers/pokeCtrl'),
      app = express();

app.use(cors());
app.use(express.json());

//endpoints
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon);

app.get('/api/pokemon', pokeCtrl.getAllPokemon);
app.post('/api/pokemon', pokeCtrl.catch);
app.put('/api/pokemon/:id', pokeCtrl.rename);
app.delete('/api/pokemon/:id', pokeCtrl.release);

const port = 3333;
app.listen(port, () => console.log(`Server running on ${port}`));