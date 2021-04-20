import { ObjectId } from 'bson'
import { getMongoRepository, MongoRepository } from 'typeorm'
import { CrimeType } from '../domain/CrimeType'
import { ICrimeTypeRepository } from '../domain/ICrimeTypeRepository'

export class MongoCrimeTypeRepository extends MongoRepository<CrimeType> implements ICrimeTypeRepository {
  async getAll (): Promise<CrimeType[]> {
    return await getMongoRepository(CrimeType).find()
  }

  async getMany (): Promise<CrimeType[]> {
    return await getMongoRepository(CrimeType).aggregate<CrimeType>([
      { $sample: { size: 2 } }
    ]).toArray()
  }

  async createCrimeType (data: CrimeType): Promise<string> {
    const op = await getMongoRepository(CrimeType).insertOne(data)
    return op.insertedId.toString()
  }

  async deleteCrimeType (id: string): Promise<boolean> {
    const op = await getMongoRepository(CrimeType).deleteOne({ _id: new ObjectId(id) })
    return !!op.deletedCount
  }

  async updateCrimeType (id: string, data: CrimeType): Promise<boolean> {
    const op = await getMongoRepository(CrimeType).updateOne({ _id: new ObjectId(id) }, { $set: data })
    return !!op.matchedCount && !!op.modifiedCount
  }
}
