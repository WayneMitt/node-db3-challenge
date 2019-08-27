const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    findSteps,
    // add,
    // update,
    // remove
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
}

function findSteps(id) {
    return db('steps')
        .where({ scheme_id: id })
}