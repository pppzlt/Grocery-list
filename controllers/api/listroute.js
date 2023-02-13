const {Router} = require('express');
const List = require('../../models');

const listRoute = Router();

listRoute.get('/all', async (req, res) => {
    try {
        const result = await List.findAll({

// USER REQUEST
            where: {} 
//List ID == UserList ID

        })
        if (!result) {
            res.status(400).send('Can not find any lists belonging to user.')
        }
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
});
module.exports = listRoute;