module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      file_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      password_salt: DataTypes.INTEGER,
      provider_key: DataTypes.STRING,
      provider_type: DataTypes.STRING,
      version: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      last_login_at: DataTypes.DATE,
      withdraw: DataTypes.Boolean
    },
      {
        timestamps: false
      })
)
