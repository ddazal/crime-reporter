import { getRepository, Repository } from 'typeorm'
import { CrimeType } from '../domain/CrimeType'
import { ICrimeTypeRepository } from '../domain/ICrimeTypeRepository'

export class CrimeTypeRepository extends Repository<CrimeType> implements ICrimeTypeRepository {
  async getAll (): Promise<CrimeType[]> {
    return await getRepository(CrimeType).find()
  }
}
