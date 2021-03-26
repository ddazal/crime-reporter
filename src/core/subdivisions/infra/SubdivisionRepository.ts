import { getRepository, Repository } from 'typeorm'
import { Subdivision } from '../domain/Subdivision'
import { ISubdivisionRepository } from '../domain/ISubdivisionRepository'

export class SubdivisionRepository extends Repository<Subdivision> implements ISubdivisionRepository {
  async getAll (): Promise<Subdivision[]> {
    return await getRepository(Subdivision).find()
  }

  async getById (id: string): Promise<Subdivision | undefined> {
    return await getRepository(Subdivision).findOne(id)
  }
}
