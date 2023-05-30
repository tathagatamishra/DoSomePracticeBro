module.exports = (sequelize, DataTypes) => {
  const todoModel = sequelize.define("todo", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: false,
    },
  });

  return todoModel;
};
