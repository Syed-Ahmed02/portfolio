import * as migration_20250412_130449 from './20250412_130449';

export const migrations = [
  {
    up: migration_20250412_130449.up,
    down: migration_20250412_130449.down,
    name: '20250412_130449'
  },
];
