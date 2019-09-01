
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DropDown from './tools/DropDown';
import React, {useState} from 'react';

const Charge = () => {
    const charges = ['Not Mentioned', `Couldn't Hear`, 'Assault', 'Burglary']
    const additionalChargeOptions = ['Yes', 'No', 'Not Sure']
    const [isDomesticViolence, setIsDomesticViolence] = useState(false)
    const [isFelony, setIsFelony] = useState(false)
    const handleDomesticViolence = (e: any) => setIsDomesticViolence(!!e.target.checked)
    const handleFelony = (e: any) => setIsFelony(!!e.target.checked)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Charge
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <DropDown id="charge" name="charge" autoComplete="charge" label='Charge' dropDownOptions={charges} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DropDown id="adtlCharge" name="adtlCharge" autoComplete="adtlCharge" label='Adtl Charges' dropDownOptions={additionalChargeOptions} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox onChange={e => handleDomesticViolence(e)} color="secondary" name="domesticViolence" id="domesticViolence" value={isDomesticViolence} />}
            label="Domestic Violence"
          />
          <FormControlLabel
            control={<Checkbox onChange={e => handleFelony(e)} color="secondary" name="felony" id="felony" value={isFelony} />}
            label="Felony"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          id="chargeNotes"
          label="Notes about the Charges"
          multiline
          rows="6"
          defaultValue="Notes go here!"
          margin="normal"
          variant="outlined"
          fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Charge;