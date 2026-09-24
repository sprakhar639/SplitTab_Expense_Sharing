#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/82c194a3b6ccb468cec44a4f17c1d2f36b769f4881c49a2f30f84e214ea2ee13/contract';
import endContract from '../../snapshots/82c194a3b6ccb468cec44a4f17c1d2f36b769f4881c49a2f30f84e214ea2ee13/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/872f945a55d588407a7bca4770577e26958a545dec26224d1cf5a6c19989d609/contract';
import startContract from '../../snapshots/872f945a55d588407a7bca4770577e26958a545dec26224d1cf5a6c19989d609/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

 override get operations() {
  return [
    this.addColumn({
      schema: 'public',
      table: 'user',
      column: col('passwordHash', 'text', {
        codecRef: { codecId: 'pg/text@1' }
      }),
    }),

    this.setNotNull({
      schema: 'public',
      table: 'user',
      column: 'passwordHash',
    }),
  ];
}
}

MigrationCLI.run(import.meta.url, M);
