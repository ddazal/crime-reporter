import { Accused } from './Accused'

export interface IAccusedRepository {
  getAll(): Promise<Accused[]>
  getById(id: string): Promise<Accused | undefined>
  getOne(): Promise<Accused | undefined>
}
