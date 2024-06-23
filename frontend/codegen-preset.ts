import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: ['./schema/schema.graphql'],
  documents: ['./src/app/**/*.tsx', './src/components/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}

export default config
