module.exports = (sequelize, DataTypes) => (
    sequelize.define('file', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      file_name: DataTypes.STRING,
      file_path: DataTypes.STRING,
      url: DataTypes.STRING,
      hash: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    },
      {
        timestamps: false
      })
)
