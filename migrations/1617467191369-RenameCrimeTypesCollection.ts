import { MigrationInterface } from 'typeorm'
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner'

export class RenameCrimeTypesCollection1617467191369 implements MigrationInterface {
  public async up (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.rename('crime_types', 'crimetypes', { dropTarget: true })
  }

  public async down (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.rename('crimetypes', 'crime_types', { dropTarget: true })
  }
}
