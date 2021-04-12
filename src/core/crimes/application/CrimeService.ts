import { Crime } from '../domain/Crime'
import { ICrimeRepository } from '../domain/ICrimeRepository'

export class CrimeService {
  private repository: ICrimeRepository

  constructor (repository: ICrimeRepository) {
    this.repository = repository
  }

  async getAll (page: number): Promise<Crime[]> {
    return await this.repository.getAll(page)
  }

  async findById (id: string): Promise<Crime | undefined> {
    return await this.repository.getById(id)
  }

  async createCrime (data: Crime): Promise<String> {
    return await this.repository.createCrime(data)
  }
}
