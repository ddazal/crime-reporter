module.exports = {
  async up(db, client) {
    return db.createCollection('accused', {
      firstName: String,
      lastName: String,
      nationalId: String,
      birthDate: Date,
      // @todo: change to char properly
      gender: String,
      // @todo: Link to subdivision
      birthPlace: String
    })
  },

  async down(db, client) {
    return db.dropCollection('accused')
  }
};
