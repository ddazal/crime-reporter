import { getRepository } from 'typeorm'
import { CrimeType } from '../domain/CrimeType'
import { ICrimeTypeRepository } from '../domain/ICrimeTypeRepository'

export class MongoCrimeTypeRepository implements ICrimeTypeRepository {
  async getAll (): Promise<CrimeType[]> {
    return await getRepository(CrimeType).find()
  }

  async getByCode (code: string): Promise<CrimeType | undefined> {
    return await getRepository(CrimeType).findOne(code)
  }

  async getOne (): Promise<CrimeType | undefined> {
    return await getRepository(CrimeType).findOne()
  }
}
