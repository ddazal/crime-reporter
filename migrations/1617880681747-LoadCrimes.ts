import { MigrationInterface } from 'typeorm'
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner'
import { AccusedRepository } from '../src/core/accused/infra/AccusedRepository'
import { CrimeTypeRepository } from '../src/core/crime-types/infra/CrimeTypeRepository'
import { Crime } from '../src/core/crimes/domain/Crime'
import lacrimes from '../src/seed/lacrimes.json'

export class LoadCrimes1617880681747 implements MigrationInterface {
  public async up (queryRunner: MongoQueryRunner): Promise<void> {
    for (const crime of lacrimes) {
      const row = Crime.create(
        AccusedRepository.getOne(),
        crime.description,
        crime.occurredDate,
        crime.lat,
        crime.lng,
        CrimeTypeRepository.getOne()
      )

      const result = await queryRunner.insertOne('crimes', row)
      console.log(`Inserted id: ${result.insertedId}`)
    }
  }

  public async down (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.clearTable('crimes')
  }
}
