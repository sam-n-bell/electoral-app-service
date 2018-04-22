let db = require('../db');

// class StatesController {

//     getAllStates = async (req, res) => {
//         try {
//             let states = await db.many(`select * from states`);
//             res.json(states);
//         } catch (err) {
//             res.status(404).send({err: err.message});
//         }
//     };
// }

// export default new StatesController();
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
