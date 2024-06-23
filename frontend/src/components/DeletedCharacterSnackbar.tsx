import { Alert, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react';
import { useSubscription } from 'urql'

const characterDeleted = `
  subscription {
    characterDeleted
  }
`

// @ts-ignore
const handleSubscription = (messages = [], response) => {
  return [response.characterDeleted, ...messages];
}

export default function DeletedCharacterSnackbar() {
  
  // @ts-ignore
  const [res] = useSubscription({ query: characterDeleted }, handleSubscription)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(res.data) {
      setOpen(true)
    }
  }, [res])
  
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center' 
      }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {res.data} is deleted!
      </Alert>
    </Snackbar>
  )
  
}
