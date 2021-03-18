import { MigrationInterface } from 'typeorm'
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner'
import { Country } from '../src/core/countries/domain/Country'
import countries from '../src/seed/countries.json'

export class LoadCountries1616042519525 implements MigrationInterface {
  public async up (queryRunner: MongoQueryRunner): Promise<void> {
    const countriesData = countries.map(country => Country.create(country.name, country.code))
    const result = await queryRunner.insertMany('countries', countriesData)
    console.log(`${result.insertedCount} documents inserted.`)
  }

  public async down (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.clearTable('countries')
  }
}
