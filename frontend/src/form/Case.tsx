import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButton from './tools/RadioButton'
import DropDown from './tools/DropDown'
import UploadForm from './UploadForm'
import React from 'react';

export interface HeaderProps {
    title: string
}

export const RenderOptions = {
    TextField,
    DropDown
}

export interface GridProps {
    xs: number,
    sm?: number,
    componentName: string,
    id: string,
    name: string,
    label: string,
    autoComplete: string,
    variant?: string,
    dropDownOptions: (string | number)[] | boolean,
}

export const Header = (props: HeaderProps) => {
    return (
        <Typography variant="h6" gutterBottom>{props.title}</Typography>
    )
}

export const GridContainer = (props: GridProps) => {
    const WhichComponentRenders = (props.componentName === 'TextField') ? RenderOptions['TextField'] : RenderOptions['DropDown']
    return (
        <Grid item xs={12} sm={6}>
            {
                (props.componentName === 'TextField') ? (
                    <WhichComponentRenders 
                        required 
                        id={props.id} 
                        name={props.name}
                        label={props.label}
                        fullWidth
                        dropDownOptions={false}
                        autoComplete={props.autoComplete}
                    />
                ) : (
                    <WhichComponentRenders
                        id={props.id}
                        name={props.name}
                        label={props.label}
                        dropDownOptions={props.dropDownOptions}
                        autoComplete={props.autoComplete}
                     />
                )
            }
        </Grid>
    )
}

export const testNames = ['Jon Snow', 'Sansa Stark', `Jaqen H'ghar`, 'Missandei']

const fieldsToPopulate = [
    {name: "date", label: "Date", type:"TextField", dropDownOptions:false},
    {name: "volunteerName", label: "Volunteer Name", type:"DropDown", dropDownOptions:[...testNames, 'Zoe Adel']},
    {name: "borough", label: "Borough", type:"DropDown", dropDownOptions:['Brooklyn', 'Queens', 'Bronx', 'Manhattan', 'Staten Island']},
    {name: "courtroom", label: "Courtroom", type:"DropDown", dropDownOptions:false},
    {name: "judge", label: "Judge", type:"TextField", dropDownOptions:false},
    {name: "ada", label: "ADA", type:"TextField", dropDownOptions:false},
    {name: "docket", label: "Docket", type:"TextField", dropDownOptions:false},
    {name: "penalLaw", label: "Penal Law", type:"TextField", dropDownOptions:false},
]

const Case = () => {
    const duration = ['< 2 min', '2-5 min', '5+ min']
  return (
    <div>
        <UploadForm/>
        <Header title="Case Information" />        
        <Grid container spacing={2}>
          {
              fieldsToPopulate.map(val => {
                  return <GridContainer 
                    xs={12}
                    componentName={val.type}
                    id={val.name}
                    name={val.name}
                    label={val.label}
                    autoComplete={val.name}
                    dropDownOptions={val.dropDownOptions}
                />
              })
          }
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Interpreter Needed"
            />
            <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                //disable if previous is not selected
                label="Interpreter Present"
            />
            </Grid>
            <RadioButton options={duration}/>
        </Grid>
    </div>
  );
}

export default Case;
