import { Db, MongoClient } from 'mongodb'

const { DB_HOST, DB_PORT, DB_NAME } = process.env

const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

async function listCollections (db: Db) {
  const collections = await db.collections()
  return collections.map(c => c.collectionName)
}

;(async () => {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connected to database', client.isConnected())

    const db = client.db(DB_NAME)
    const collections = await listCollections(db)
    if (collections.includes('crimes')) {
      return client.close()
    }

    const result = await db.collection('crimes').insertMany([
      {
        description: 'A murder',
        type: 'Murder'
      },
      {
        description: 'A robbery',
        type: 'Robbery'
      }
    ])
    console.log('Inserted ' + result.insertedCount + ' new documents')
    client.close()
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
})()
