import { Subdivision } from '../domain/Subdivision'
import { ISubdivisionRepository } from '../domain/ISubdivisionRepository'

export class SubdivisionService {
  private repository: ISubdivisionRepository

  constructor (repository: ISubdivisionRepository) {
    this.repository = repository
  }

  async getAll (): Promise<Subdivision[]> {
    return await this.repository.getAll()
  }

  async findById (id: string): Promise<Subdivision | undefined> {
    return await this.repository.getById(id)
  }
}
