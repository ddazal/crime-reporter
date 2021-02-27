import { Crime } from '../domain/crime'
import { CrimeRepository } from '../domain/crime.repository'
import { MongoLib } from '../../../shared/infra/mongodb/'
import { ObjectId } from 'mongodb'

export class MongoCrimeRepository extends MongoLib implements CrimeRepository {
  async find (): Promise<Crime[]> {
    const db = await this.getDb()
    return db.collection('crimes').find({}).toArray()
  }

  async findById (id: string): Promise<Crime> {
    const db = await this.getDb()
    const crime = db.collection('crimes').findOne({ _id: new ObjectId(id) })
    return crime || {}
  }
}
