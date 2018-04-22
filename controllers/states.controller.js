let db = require('../db');

let StatesController = {
    getAllStates: async function (req, res) {
        try {
                let states = await db.many(`select * from states  order by abbreviation asc`);
            
                res.json(states);
            } catch (err) {
                res.status(500).send({err: err.message});
            }
    }
}

module.exports = StatesController;
