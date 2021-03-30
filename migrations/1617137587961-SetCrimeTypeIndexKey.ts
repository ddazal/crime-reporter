import { MigrationInterface } from 'typeorm'
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner'

export class SetCrimeTypeIndexKey1617137587961 implements MigrationInterface {
  public async up (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.dropCollectionIndex('crime_types', 'code_1')
    await queryRunner.createCollectionIndex('crime_types', { name: 1 })
  }

  public async down (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.dropCollectionIndex('crime_types', 'name_1')
    await queryRunner.createCollectionIndex('crime_types', { code: 1 })
  }
}
