import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Case from './Case';
import Charge from './Charge';
import Accused from './Accused';
import {Bail} from './Bail';
import Plea from './Plea';
import React, {useState} from 'react';
import { isTemplateElement } from "@babel/types";

type ThemeProps = Theme & {
    spacing: number 
}

const styles = (theme: Theme) => createStyles({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginTop: 150,
    marginLeft: theme.spacing() * 2, //spacing.unit
    marginRight: theme.spacing() * 2, //spacing.unit
    [theme.breakpoints.up(600 + theme.spacing() * 2 * 2)]: { //spacing.unit
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing() * 3, //spacing.unit
    marginBottom: theme.spacing() * 3, //spacing.unit
    padding: theme.spacing() * 2, //spacing.unit
    [theme.breakpoints.up(600 + theme.spacing() * 3 * 2)]: { //spacing.unit
      marginTop: theme.spacing() * 6, //spacing.unit
      marginBottom: theme.spacing() * 6, //spacing.unit
      padding: theme.spacing() * 3, //spacing.unit
    },
  },
  stepper: {
    padding: `${theme.spacing() * 3}px 0 ${theme.spacing() * 5}px`, //spacing.unit
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing() * 3, //spacing.unit
    marginLeft: theme.spacing(), //spacing.unit
  },
});

const steps = ['Case', 'Charge', 'Defendent', 'Plea', 'Bail'];
const bib = ['judge', 'volunteerName'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Case />;
    case 1:
      return <Charge />;
    case 2:
      return <Accused />;
    case 3:
      return <Plea />;
    case 4:
      return <Bail />;
    default:
      throw new Error('Unknown step');
  }
}

interface State {
    activeStep: number
}

interface FormData {
  date: string,
  volunteerName: string,
  borough: string,
  courtroom: string,
  judge: string,
  ada: string,
  docket: string,
  penalLaw: string,
  charge: string,
  adtlCharge: string,
  domesticViolence: boolean,
  felony: boolean,
  chargeNotes: string,
  gender: string,
  race: string,
  age: string,
  daSay: string,
  plea: string,
  pleaNotes: string,
  caseResolution: string,
  caseResolve: boolean,
  pleaOptions: string,
  sentence: string,
  queens: boolean,
  prosecution_cashBail: string,
  prosecution_bondBail: string,
  prosecution_otherBail: string,
  prosecution_ror: string,
  prosecution_remand: string,
  prosecution_supervisedRelease: string,
  prosecution_orderOfProtection: string,
  defense_cashBail: string,
  defense_bondBail: string,
  defense_otherBail: string,
  defense_ror: string,
  defense_remand: string,
  defense_supervisedRelease: string,
  defense_orderOfProtection: string,
  judge_cashBail: string,
  judge_bondBail: string,
  judge_otherBail: string,
  judge_ror: string,
  judge_remand: string,
  judge_supervisedRelease: string,
  judge_orderOfProtection: string,
}

const initialState = {
  date: "",
  volunteerName: "",
  borough: "",
  courtroom: "",
  judge: "",
  ada: "",
  docket: "",
  penalLaw: "",
  charge: "",
  adtlCharge: "",
  domesticViolence: false,
  felony: false,
  chargeNotes: "",
  gender: "",
  race: "",
  age: "",
  daSay: "",
  plea: "",
  pleaNotes: "",
  caseResolution: "",
  caseResolve: false,
  pleaOptions: "",
  sentence: "",
  queens: false,
  prosecution_cashBail: '',
  prosecution_bondBail: '',
  prosecution_otherBail: '',
  prosecution_ror: '',
  prosecution_remand: '',
  prosecution_supervisedRelease: '',
  prosecution_orderOfProtection: '',
  defense_cashBail: '',
  defense_bondBail: '',
  defense_otherBail: '',
  defense_ror: '',
  defense_remand: '',
  defense_supervisedRelease: '',
  defense_orderOfProtection: '',
  judge_cashBail: '',
  judge_bondBail: '',
  judge_otherBail: '',
  judge_ror: '',
  judge_remand: '',
  judge_supervisedRelease: '',
  judge_orderOfProtection: '',
}

interface Props {
    classes: any
}

const DisplayForm: React.FC<Props & WithStyles<'root'>> = (props: any) => {
    // consider calling these userDataKeys & setUserDataValues
    const [userData, setUserData] = useState<FormData>(initialState)
    const [activeStep, setActiveStep] = useState<number>(0)
    const updateValues = (newState: {[key: string]: string | boolean}) => setUserData({...userData,
      ...newState})

    const handleNext = (document:any) => {
        let newStep = activeStep + 1
        // change pib value for htmlElementKey
        let stateToChangeObject: {[key: string]: string | boolean} = {};
        for (let key in userData) { 
          const keyExists = document.getElementById(key) ? document.getElementById(key) : '';
          if (keyExists) {
            console.log("new state to capture", stateToChangeObject)
            stateToChangeObject[key] = keyExists.value;
          }
        }
        updateValues(stateToChangeObject)
        setActiveStep(newStep)
      };
    
    const handleBack = () => {
        let newStep = activeStep - 1
        setActiveStep(newStep)
      };
    
    const handleReset = () => {
        setActiveStep(0)
      };
      const { classes } = props;
      return (
        // you could use HTMLs <section id= ''> 
        <React.Fragment>
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Accountabilty Form
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                    //replace with Component for all case files
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Thank you for submitted your form!
                    </Typography>
                    <Typography variant="subtitle1">
                      Your volunteerism is appreciated.
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleNext(document)}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </main>
        </React.Fragment>
      );
    }

export const MainDisplayForm = withStyles(styles)(DisplayForm);