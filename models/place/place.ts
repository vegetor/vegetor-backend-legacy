module.exports = (sequelize, DataTypes) => (
    sequelize.define('place', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      file_ids: DataTypes.ARRAY(DataTypes.INTEGER),
      name: DataTypes.STRING,
      open_now: DataTypes.JSON,
      contents: DataTypes.TEXT,
      contact: DataTypes.STRING,
      location: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      address: DataTypes.STRING,
      star_rate: DataTypes.DECIMAL,
      url: DataTypes.STRING,
      instagram_url: DataTypes.STRING,
      menus: DataTypes.JSON,
      category: DataTypes.ARRAY
    },
      {
        timestamps: false
      })
)
