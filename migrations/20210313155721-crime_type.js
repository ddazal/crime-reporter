module.exports = {
  async up(db, client) {
    return db.createCollection('crimetypes', {
      name: String
    })
  },

  async down(db, client) {
    return db.dropCollection('crimetypes')
  }
};
