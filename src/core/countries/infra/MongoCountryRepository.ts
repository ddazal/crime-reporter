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
    const searchCode = code.toUpperCase()
    const updateData = data
    if (updateData.code) {
      updateData.code = updateData.code.toUpperCase()
    }
    const op = await getMongoRepository(Country).updateOne({ code: searchCode }, { $set: updateData })
    return !!op.matchedCount && !!op.modifiedCount
  }
}
