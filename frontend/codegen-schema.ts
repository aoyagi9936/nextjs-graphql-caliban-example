import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: ['http://localhost:8090/api/graphql'],
  generates: {
    './schema/schema.graphql': {
      plugins: ['schema-ast']
    }
  }
}
export default config
