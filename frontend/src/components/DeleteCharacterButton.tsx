import { Delete } from '@mui/icons-material'
import { graphql } from '@/gql'
import { useMutation } from 'urql'
import LoadingButton from '@mui/lab/LoadingButton'

interface Props {
  name: string
}

const DeleteCharacterMutation = graphql(`
  mutation DeleteCharacter($name: String!) {
    deleteCharacter(name: $name)
  }
`)

export default function DeleteCharacterButton({ name }: Props) {

  const [result, execute] = useMutation(DeleteCharacterMutation)
  
  const submit = () => {
    execute({ name }, {
      additionalTypenames: ['Character']
    })
  }
  
  return (
    <LoadingButton
      variant="outlined"
      startIcon={<Delete />}
      loading={result.fetching}
      loadingPosition="start"
      onClick={submit}>Delete</LoadingButton>
  )
  
}
