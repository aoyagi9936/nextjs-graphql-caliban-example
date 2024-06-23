import { AppBar, Toolbar, Typography } from '@mui/material'

export default function ExampleAppBar() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">[Example] Next.js + Material UI + URQL</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
