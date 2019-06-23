import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {GridContainer} from './Accused';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const Plea = () => {
  //should this move into a class?
  const daOptions = ["Dismissal", "No offer/rec", "Offer/Rec"];
  const pleaOptionsFromDA = ["Top Charge", "Disorderly", "Unlicensed Driving", "ACD or marijuana ACD", "Other"];
  const sentenceOptionsFromDA = ["Days Jail", "Days Community Service", "Program", "Fine", "Other"];
  const caseResolutionOptions = ["Yes", "No", "Not Sure"];
  const fillInOptions = [
    {name: 'daSay', label: 'Day Say?', dropDownOptions: daOptions},
    {name: 'plea', label: 'Plea', dropDownOptions: pleaOptionsFromDA},
    {name: 'sentence', label: 'Sentence', dropDownOptions: sentenceOptionsFromDA},
]

  return (
    //fix spacing with CSS
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Plea Discussion
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
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="10"
          defaultValue="Notes about the plea discussion"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Typography variant="h6" gutterBottom>
        Plea Discussion
      </Typography>
      <Grid container spacing={2}>
        <GridContainer 
                id="caseResolution"
                label="Case Resolution"
                autoComplete="caseResolution"
                name="caseResolution"
                dropDownOptions={caseResolutionOptions}
            />
        <Grid item xs={12} sm={8}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            //disable if previous is not selected
            label="Did the case resolve?"
          />
        </Grid>
        <GridContainer 
                id="pleaOptions"
                label="Plea Options"
                autoComplete="pleaOptions"
                name="pleaOptions"
                dropDownOptions={pleaOptionsFromDA}
                sm={6}
        />
        <GridContainer 
                id="sentence"
                label="Sentence"
                autoComplete="sentence"
                name="sentence"
                dropDownOptions={caseResolutionOptions}
                sm={6}
        />
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
          //disable if previous is not selected
          label="Queens: Waive 190.5 Right"
        />
      </Grid>
    </React.Fragment>
  );
}

export default Plea;