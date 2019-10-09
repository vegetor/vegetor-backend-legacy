module.exports = (sequelize, DataTypes) => (
  sequelize.define('user_like', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    from: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  },
    {
      timestamps: false
    })
)
