module.exports = (sequelize, DataTypes) => (
  sequelize.define('board', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    contents: DataTypes.TEXT,
    display: DataTypes.Boolean,
    hit: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  },
    {
      timestamps: false
    })
)
