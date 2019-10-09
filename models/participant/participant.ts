module.exports = (sequelize, DataTypes) => (
  sequelize.define('participant', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  },
    {
      timestamps: false
    })
)
