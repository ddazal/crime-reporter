import { CrimeType } from '../domain/CrimeType'
import { ICrimeTypeRepository } from '../domain/ICrimeTypeRepository'

export class CrimeTypeService {
  private repository: ICrimeTypeRepository

  constructor (repository: ICrimeTypeRepository) {
    this.repository = repository
  }

  getAll (): Promise<CrimeType[]> {
    return this.repository.getAll()
  }

  getMany (): Promise<CrimeType[]> {
    return this.repository.getMany()
  }

  createCrimeType (data: CrimeType): Promise<string> {
    return this.repository.createCrimeType(data)
  }

  deleteCrimeType (id: string): Promise<boolean> {
    return this.repository.deleteCrimeType(id)
  }
}
