import { UIStyles } from '@/ui_styles'
import { Suspense, useMemo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQuery } from '@urql/next'
import { graphql } from '@/gql'
import { Alert, Paper, Skeleton, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import CharacterRow from '@/components/CharacterRow'
import { Origin } from '@/gql/graphql'

const GetCharactersQuery = graphql(`
  query GetCharacters($origin: Origin) {
    characters(origin: $origin) {
      ...CharacterFields
    }
  }
`)

interface Props {
  origin: string
}

export default function CharactersTable({ origin }: Props) {

  const [{ data }] = useQuery({
    query: GetCharactersQuery,
    variables: { origin: origin ? origin as Origin : null },
    context: useMemo(
      () => ({
        fetchOptions: { cache: 'no-store' }
      }),
      []
    ),
  })

  return (
    <ErrorBoundary fallback={<h2>Error...</h2>}>
      <Suspense fallback={<Skeleton variant="rectangular" width={300} height={100} />}>
        {data?.characters.length === 0
        ? (<Alert severity="warning">Data Not Found.</Alert>)
        : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <UIStyles.MonoTableCell padding="checkbox" />
                  <UIStyles.MonoTableCell>name</UIStyles.MonoTableCell>
                  <UIStyles.MonoTableCell>nicknames</UIStyles.MonoTableCell>
                  <UIStyles.MonoTableCell>origin</UIStyles.MonoTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.characters.map((v, idx) => (
                  <CharacterRow key={idx} fields={v} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Suspense>
    </ErrorBoundary>
  )
}
