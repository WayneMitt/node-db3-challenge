const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first()
}

function findSteps(id) {
    return db('steps')
        .where({ scheme_id: id })
        .orderBy('step_number')
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
}

function update(scheme, id) {
    return db('schemes')
        .where({ id })
        .update(scheme)
}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
}