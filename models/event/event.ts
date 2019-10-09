module.exports = (sequelize, DataTypes) => (
    sequelize.define('event', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      title: DataTypes.STRING,
      contents: DataTypes.STRING,
      place: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
      address: DataTypes.STRING,
      pool: DataTypes.INTEGER,
      contact: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      display_yn: DataTypes.Boolean,
      hit: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    },
      {
        timestamps: false
      })
)
