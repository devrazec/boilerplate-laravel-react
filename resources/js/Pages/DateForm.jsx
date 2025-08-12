import * as React from 'react';
import dayjs from 'dayjs';
import "dayjs/locale/en";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField, Container, Typography } from '@mui/material';

export default function DateForm() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        MUI Date Picker with Day.js
      </Typography>

      <LocalizationProvider
        adapterLocale={'en'}
        dateAdapter={AdapterDayjs}>
        <DatePicker
          className=""
          sx={{
            borderRadius: "6px",
            width: '200px'
          }}
          //value={fieldDate ? fieldDate : dayjs()}
          value={value}
          views={['year', 'month', 'day']}
          format="DD/MM/YYYY"
          onChange={(e) => setValue(e)}
        />
      </LocalizationProvider>
    </Container>
  );
}
