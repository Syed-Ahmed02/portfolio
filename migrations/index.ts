import * as migration_20250412_130449 from './20250412_130449';
import * as migration_20250412_223342 from './20250412_223342';

export const migrations = [
  {
    up: migration_20250412_130449.up,
    down: migration_20250412_130449.down,
    name: '20250412_130449',
  },
  {
    up: migration_20250412_223342.up,
    down: migration_20250412_223342.down,
    name: '20250412_223342'
  },
];
