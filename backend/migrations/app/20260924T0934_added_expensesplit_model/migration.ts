#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/487d913a089c798507eb478acbe79c55ff5faf0bd108a9ffd256414d4bb2e37e/contract';
import startContract from '../../snapshots/487d913a089c798507eb478acbe79c55ff5faf0bd108a9ffd256414d4bb2e37e/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/872f945a55d588407a7bca4770577e26958a545dec26224d1cf5a6c19989d609/contract';
import endContract from '../../snapshots/872f945a55d588407a7bca4770577e26958a545dec26224d1cf5a6c19989d609/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'expenseSplit',
        columns: [
          col('amount', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('expenseId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('userId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['expenseId', 'userId'])],
      }),
      this.createIndex({
        schema: 'public',
        table: 'expenseSplit',
        index: 'expenseSplit_expenseId_idx_69d413fa',
        columns: ['expenseId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'expenseSplit',
        index: 'expenseSplit_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'expenseSplit',
        foreignKey: {
          name: 'expenseSplit_expenseId_fkey',
          columns: ['expenseId'],
          references: { schema: 'public', table: 'expense', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'expenseSplit',
        foreignKey: {
          name: 'expenseSplit_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
