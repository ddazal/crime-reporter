import { Accused } from '../domain/Accused'
import { IAccusedRepository } from '../domain/IAccusedRepository'

export class AccusedService {
  private repository: IAccusedRepository

  constructor (repository: IAccusedRepository) {
    this.repository = repository
  }

  async getAll (): Promise<Accused[]> {
    return await this.repository.getAll()
  }

  async getByName (name: string): Promise<Accused | undefined> {
    return await this.repository.getByName(name)
  }
}
