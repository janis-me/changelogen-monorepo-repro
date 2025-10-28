import { defineConfig } from '@maz-ui/changelogen-monorepo';

export default defineConfig({
  // Monorepo configuration
  monorepo: {
    versionMode: 'selective',
    packages: ['packages/*'],
  },
});
