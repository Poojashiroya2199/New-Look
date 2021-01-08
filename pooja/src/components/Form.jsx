import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    height:40
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Form1(props) {
  const classes = useStyles();
 const {arr,val,handleChange}=props;
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Qty</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={val}
          onChange={handleChange}
          label="Qty"
        >
         
         {arr.map(item=>
           <MenuItem value={item} key={item}>{item}</MenuItem> )} 
           
        </Select>
      </FormControl>
         </div>
  );
}
