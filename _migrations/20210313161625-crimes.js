module.exports = {
  async up (db, client) {
    return db.createCollection('crimes', {
      description: String,
      registeredDate: Date,
      occurredDate: Date,
      // @todo: change to let mongo treat as georeference
      lat: String,
      // @todo: change to let mongo treat as georeference
      lng: String,
      occurredAt: String
    })
  },

  async down (db, client) {
    return db.dropCollection('crimes')
  }
}
