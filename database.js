const db = require('./models');
const Umzug = require('umzug');

const umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: {
        sequelize: db.sequelize,
    },
    migrations: {
      params: [db.sequelize.getQueryInterface(), db.Sequelize],
    },
});

umzug.up();
