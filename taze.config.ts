import { defineConfig } from 'taze';

export default defineConfig({
  write: true,
  // run `npm install` or `yarn install` right after bumping
  install: true,
  recursive: true,
  ignorePaths: ['**/node_modules/**'],
});
