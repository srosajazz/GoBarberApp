module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker1',
  password: 'docker1',

  database: 'gobarberdb',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
