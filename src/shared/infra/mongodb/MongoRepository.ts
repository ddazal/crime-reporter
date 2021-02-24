import { Db, MongoClient } from 'mongodb'

const {
  DB_HOST, DB_PORT, DB_NAME
} = process.env

class MongoRepository {
  url: string
  client: MongoClient

  constructor () {
    this.url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
    this.client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true })
  }

  async getDb (): Promise<Db> {
    if (!this.client.isConnected()) {
      await this.client.connect()
    }
    return this.client.db()
  }
}

export { MongoRepository }
