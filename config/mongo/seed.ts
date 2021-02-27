/* eslint-disable import/first */
require('dotenv').config()

import { Db } from 'mongodb'
import { MongoLib } from '../../src/shared/infra/mongodb'

async function listCollections (db: Db) {
  const collections = await db.collections()
  return collections.map(c => c.collectionName)
}

; (async () => {
  try {
    const repository = new MongoLib()
    const db = await repository.getDb()
    const collections = await listCollections(db)

    if (collections.includes('crimes')) {
      return repository.client.close()
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
    repository.client.close()
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
})()
