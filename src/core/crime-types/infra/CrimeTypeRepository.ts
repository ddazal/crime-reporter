import { getRepository, MongoRepository, Repository } from 'typeorm'
import { CrimeType } from '../domain/CrimeType'
import { ICrimeTypeRepository } from '../domain/ICrimeTypeRepository'

export class CrimeTypeRepository extends Repository<CrimeType> implements ICrimeTypeRepository {
  async getAll (): Promise<CrimeType[]> {
    return await getRepository(CrimeType).find()
  }

  async getMany (): Promise<CrimeType[] | []> {
    const repo = getRepository(CrimeType) as MongoRepository<CrimeType>
    const crimeType = await repo.aggregate<CrimeType>([
      { $sample: { size: 2 } }
    ]).toArray()
    return crimeType
  }
}
