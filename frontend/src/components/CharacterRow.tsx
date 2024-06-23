import { UIStyles } from '@/ui_styles'
import { FragmentType, useFragment } from '@/gql/fragment-masking'
import { graphql } from '@/gql'
import DeleteCharacterButton from './DeleteCharacterButton'
 
export const CharacterFieldsFragment = graphql(`
  fragment CharacterFields on Character {
    name
    nicknames
    origin
  }
`)

export default function CharacterRow (props: {
  fields: FragmentType<typeof CharacterFieldsFragment>
}) {
  const field = useFragment(CharacterFieldsFragment, props.fields)
  
  return (
    <UIStyles.StripesTableRow>
      <UIStyles.MonoTableCell>
        <DeleteCharacterButton name={field.name} />
      </UIStyles.MonoTableCell>
      <UIStyles.MonoTableCell>{field.name}</UIStyles.MonoTableCell>
      <UIStyles.MonoTableCell>{field.nicknames}</UIStyles.MonoTableCell>
      <UIStyles.MonoTableCell>{field.origin}</UIStyles.MonoTableCell>
    </UIStyles.StripesTableRow>
  )
} 

