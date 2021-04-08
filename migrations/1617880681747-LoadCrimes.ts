import { MigrationInterface } from 'typeorm'
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner'
import { AccusedService } from '../src/core/accused/application/AccusedService'
import { AccusedRepository } from '../src/core/accused/infra/AccusedRepository'
import { CrimeTypeService } from '../src/core/crime-types/application/CrimeTypeService'
import { CrimeTypeRepository } from '../src/core/crime-types/infra/CrimeTypeRepository'
import { Crime } from '../src/core/crimes/domain/Crime'
import lacrimes from '../src/seed/lacrimes.json'

export class LoadCrimes1617880681747 implements MigrationInterface {
  public async up (queryRunner: MongoQueryRunner): Promise<void> {
    const accusedService = new AccusedService(new AccusedRepository())
    const typesService = new CrimeTypeService(new CrimeTypeRepository())

    for (const crime of lacrimes) {
      const accused = await accusedService.getMany()
      const types = await typesService.getMany()

      const row = Crime.create(
        accused,
        crime.description,
        crime.occurredDate,
        crime.lat,
        crime.lng,
        types
      )

      const result = await queryRunner.insertOne('crimes', row)
      console.log(`Inserted id: ${result.insertedId}`)
    }
  }

  public async down (queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.clearTable('crimes')
  }
}
