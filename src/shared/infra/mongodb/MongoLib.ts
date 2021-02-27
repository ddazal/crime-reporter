import { Db, MongoClient } from 'mongodb'

const {
  DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_LOCAL
} = process.env

class MongoLib {
  url: string
  client: MongoClient

  constructor () {
    this.url = DB_LOCAL ? `mongodb://${DB_HOST}:27017/${DB_NAME}` : `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
    this.client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true })
  }

  async getDb (): Promise<Db> {
    if (!this.client.isConnected()) {
      await this.client.connect()
    }
    return this.client.db(DB_NAME)
  }
}

export { MongoLib }
