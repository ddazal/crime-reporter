import { Crime } from '../domain/Crime'
import { ICrimeRepository } from '../domain/ICrimeRepository'

export class CrimeService {
  private repository: ICrimeRepository

  constructor (repository: ICrimeRepository) {
    this.repository = repository
  }

  async getAll (): Promise<Crime[]> {
    return await this.repository.getAll()
  }

  async findById (id: string): Promise<Crime | undefined> {
    return await this.repository.getById(id)
  }
}
