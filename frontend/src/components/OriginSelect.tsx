import { Origin } from "@/gql/graphql"
import { Box, MenuItem, TextField } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"

interface Props {
  name: string
  label: string
}

export default function OriginSelect({ name, label }: Props) {

  const { control } = useFormContext()
  
  return (
    // https://github.com/mui/material-ui/issues/38869
    <Box component="form" sx={{
      '& .MuiTextField-root': { m: 2, width: '25ch' },
    }}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            select
            label={label}
            variant="outlined"
            InputLabelProps={{ 
              component: 'span',
            }}
          >
            <MenuItem value="">UnSelected</MenuItem>
            {Object.values(Origin).map((v) => (
              <MenuItem key={v} value={v}>{v}</MenuItem>
            ))}
          </TextField>
        )}
      />
    </Box>
  )
}
