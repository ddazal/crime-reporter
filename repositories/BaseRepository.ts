import { IWrite } from './interfaces/IWrite'
import { IRead } from './interfaces/IRead'

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  add (item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  update (id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  delete (id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  getAll (): Promise<T[]> {
    throw new Error('Method not implemented.')
  }

  get (id: string): Promise<T> {
    throw new Error('Method not implemented.')
  }
}
