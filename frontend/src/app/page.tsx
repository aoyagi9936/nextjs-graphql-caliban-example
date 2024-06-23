'use client'

import { Box } from '@mui/material'
import CharactersTable from '@/components/CharactersTable'
import OriginSelect from '@/components/OriginSelect'
import DeletedCharacterSnackbar from '@/components/DeletedCharacterSnackbar'
import { FormProvider, useForm } from 'react-hook-form'

const SelectName = 'OriginSelect'

export default function Home() {

  const methods = useForm()
  const { watch } = methods
  const origin = watch(SelectName)
  
  return (
    <>
      <DeletedCharacterSnackbar />
      <FormProvider {...methods}>
        <OriginSelect name={SelectName} label='Origin' />
      </FormProvider>
      <Box sx={{ mx: 2 }}>
        <CharactersTable origin={origin} />
      </Box>
    </>
  )
}
