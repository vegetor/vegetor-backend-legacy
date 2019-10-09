module.exports = (sequelize, DataTypes) => (
  sequelize.define('star_rate', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    star_rate: DataTypes.INT
  },
    {
      timestamps: false
    })
)
