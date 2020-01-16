const pokemonCaught = [];
let id = 0;

module.exports = {
    getAllPokemon: (req, res) => {
        res.status(200).send(pokemonCaught)
    },
    catch: (req, res) => {
        const {name, img} = req.body;
        const pokemonObj = {
            name,
            img,
            id: id++
        }
        pokemonCaught.push(pokemonObj);
        res.status(200).send(pokemonCaught);
    },
    rename: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        const index = pokemonCaught.findIndex(element => element.id === +id);
        pokemonCaught[index].name = name;
        res.status(200).send(pokemonCaught);
    },
    release: (req, res) => {
        const {id} = req.params;
        
        const index = pokemonCaught.findIndex(element => element.id === +id);
        pokemonCaught.splice(index, 1);
        res.status(200).send(pokemonCaught);
    }
}