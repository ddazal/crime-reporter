import { CrimeType } from '../domain/CrimeType'
import { ICrimeTypeRepository } from '../domain/ICrimeTypeRepository'

export class CrimeTypeService {
  private repository: ICrimeTypeRepository

  constructor (repository: ICrimeTypeRepository) {
    this.repository = repository
  }

  async getAll (): Promise<CrimeType[]> {
    return await this.repository.getAll()
  }

  async getMany (): Promise<CrimeType[]> {
    return await this.repository.getMany()
  }
}
