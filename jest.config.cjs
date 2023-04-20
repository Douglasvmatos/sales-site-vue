module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue', 'html'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
};
