import Typography from '@material-ui/core/Typography';
import DropDown, {DropDownProps} from './tools/DropDown';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export const GridContainer = (props: DropDownProps) => {
    const sm = props.sm ? 6 : 4
    return (
    <Grid item xs={12} sm={sm}>
        <DropDown id={props.id} name={props.name} autoComplete={props.autoComplete} label={props.label} dropDownOptions={props.dropDownOptions} />
    </Grid>
    )
}



//currently in use with the Material Route
const Accused = () => {
  // same here, i'd pop these datums out
  const gender = ['M', 'F', 'GNC', 'TM', 'TF'];
  const race = ['W', 'B', 'L', 'NA', 'SA', 'EA'];
  const ageGroup = ['16-24', '25-34', '35-44', '45-54', '55+']
  const fillInOptions = [
    {name: 'gender', label: 'Gender', dropDownOptions: gender},
    {name: 'race', label: 'Race', dropDownOptions: race},
    {name: 'age', label: 'Age', dropDownOptions: ageGroup},
]
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Defendant Information
      </Typography>
      <Grid container spacing={2}>
          {
              fillInOptions.map(val => {
                  return <GridContainer 
                    id={val.name}
                    label={val.label}
                    autoComplete={val.name}
                    name={val.name}
                    dropDownOptions={val.dropDownOptions}
                    />
              })
          }
      </Grid>
    </React.Fragment>
  );
}

export default Accused;
