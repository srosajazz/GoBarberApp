module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'barber',
  password: 'barber',

  database: 'gobarberdb',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
