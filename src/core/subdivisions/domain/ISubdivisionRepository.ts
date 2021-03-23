import { Subdivision } from './Subdivision'

export interface ISubdivisionRepository {
  getAll(): Promise<Subdivision[]>
  getById(id: string): Promise<Subdivision | undefined>
}
