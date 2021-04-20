import { getMongoRepository, MongoRepository } from 'typeorm'
import { Subdivision } from '../../subdivisions/domain/Subdivision'
import { Country } from '../domain/Country'
import { ICountryRepository } from '../domain/ICountryRepository'

export class MongoCountryRepository extends MongoRepository<Country> implements ICountryRepository {
  async getAll (): Promise<Country[]> {
    return await getMongoRepository(Country).find()
  }

  async getByCode (code: string): Promise<Country | undefined> {
    return await getMongoRepository(Country).findOne({ code })
  }

  async getSubdivisions (code: string): Promise<Subdivision[]> {
    return await getMongoRepository(Subdivision).find({ where: { 'country.code': code }, select: ['id', 'name', 'code', 'level'] })
  }

  async updateCountry (code: string, data: Country): Promise<boolean> {
    const op = await getMongoRepository(Country).updateOne({ code }, { $set: data })
    return !!op.matchedCount && !!op.modifiedCount
  }
}
