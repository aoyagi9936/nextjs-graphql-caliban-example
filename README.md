# Overview

This repository provides an example of how Next.js and Caliban work together with GraphQL-Codgen v3.

You will experience smooth front-end development with Next.js and GraphQL-Codgen and high-performance back-end development with Caliban.

![Example](https://raw.githubusercontent.com/aoyagi9936/nextjs-graphql-caliban-example/main/example.gif)

# Environment

- frontend
  - [Next.js](https://nextjs.org/)
  - [URQL](https://commerce.nearform.com/open-source/urql/)
  - [Graphql-Codegen](https://the-guild.dev/graphql/codegen)
  - [Material UI](https://mui.com/material-ui/)
- backend
  - [Caliban](https://ghostdogpr.github.io/caliban/docs/)
  - [ZIO](https://zio.dev/)

# Usage

## backend

```shell
cd backend
sbt run
```

It would help to debug the GraphQL query, you can access GraphQL IDE below the URL.

`http://localhost:8090/graphiql`

```graphql
query {
  characters(origin:BELT) {
    name
    nicknames
    origin
    ...OriginConnectionsFragment @defer
  }
}

fragment OriginConnectionsFragment on Character {
  connections(by: Origin) {
    name
  }
}
```

## frontend

```shell
cd frontend
npm run dev
```

You need to regenerate the GraphQL-Cogegen file, you can execute the below command.

```shell
npm run gen-schema
npm run gen-preset
```

The `gen-schema` command generates the schema file from the backend URL, so the back-end application must be running.

The `gen-preset` command generates a typscript file from the schema file, so there is no need to start a back-end application.
