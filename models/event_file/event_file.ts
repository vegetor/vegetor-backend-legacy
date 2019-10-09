module.exports = (sequelize, DataTypes) => (
    sequelize.define('event_file', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      created_at: DataTypes.DATE
    },
      {
        timestamps: false
      })
)
