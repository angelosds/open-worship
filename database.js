const db = require('./models');
const Umzug = require('umzug');

const umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: {
        sequelize: db.sequelize,
    },
});

umzug.up();