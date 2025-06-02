module.exports = (sequelize, Sequelize) => {
  const db_content = sequelize.define("test_table", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }}, 
    {
      timestamps: false, 
      freezeTableName: true
  });

  return db_content;
};