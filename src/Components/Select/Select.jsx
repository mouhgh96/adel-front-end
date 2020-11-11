import { FormControl, InputLabel, makeStyles } from '@material-ui/core';
import React from 'react';

let useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
}));
export let Select = (props) => {
  let classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl} fullWidth>
      <InputLabel htmlFor="age-native-simple">Age</InputLabel>
      <Select
        native
        value={10}
        // onChange={handleChange}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
      >
        <option aria-label="None" value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </FormControl>
  );
};
