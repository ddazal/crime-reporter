import { MigrationInterface } from 'typeorm'
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner'
import { CrimeType } from '../src/core/crime-types/domain/CrimeType'
import crimeTypes from '../src/seed/crime_types.json'

export class LoadCrimeTypes1617106387516 implements MigrationInterface {
  public async up (queryRunner: MongoQueryRunner): Promise<void> {
    const crimeTypesData = crimeTypes.map(crimeType => CrimeType.create(crimeType.name))
    const result = await queryRunner.insertMany('crime_types', crimeTypesData)
    await queryRunner.createCollectionIndex('crime_types', { code: 1 })
    console.log(`${result.insertedCount} documents inserted.`)
  }

  public async down (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.clearTable('crime_types')
  }
}
