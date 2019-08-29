import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButton from './tools/RadioButton'
import DropDown from './tools/DropDown'
import UploadForm from './UploadForm'
import React, { useState, useEffect } from 'react';

export interface HeaderProps {
    title: string
}

//migrate this to another file
const DateField = () => {
    return (
    <TextField
        required
        id={"date"}
        defaultValue={"12/06/2018"}
        fullWidth
        type={"date"}
        />
    )
}

export const RenderOptions = {
    TextField,
    DropDown,
    DateField
}

type RenderComponent = keyof typeof RenderOptions

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
    type?: string,
    defaultValue: string | Date,
}

export const Header = (props: HeaderProps) => {
    return (
        <Typography variant="h6" gutterBottom>{props.title}</Typography>
    )
}

export const GridContainer = (props: GridProps) => {
    const isDate = (props.name === "date") ? "date" : "type"
    const [render, setRender] = React.useState<RenderComponent>("TextField")
    useEffect(() => {
        if (props.componentName === 'TextField' && props.name === 'date') {
            setRender("DateField")
        } else if (props.componentName === 'DropDown') {
            setRender("DropDown")
        } else {
            setRender("TextField")
        }
    }, [props.id])
    const WhichComponentRenders = RenderOptions[render]
    const {id, name, label, dropDownOptions, autoComplete} = props
    return (
        <Grid item xs={12} sm={6}>
            <WhichComponentRenders 
                required 
                id={id}
                name={name}
                label={label}
                fullWidth
                dropDownOptions={dropDownOptions}
                autoComplete={autoComplete}
                />
        </Grid>
    )
}

export const testNames = ['Jon Snow', 'Sansa Stark', `Jaqen H'ghar`, 'Missandei']

export const testCourtRooms = [`King's County`, `Queen's Criminal Court`, `Midtown Community Court`]

const fieldsToPopulate = [
    {name: "date", label: "Date", type:"TextField", dropDownOptions:false},
    {name: "volunteerName", label: "Volunteer Name", type:"DropDown", dropDownOptions:[...testNames, 'Zoe Adel']},
    {name: "borough", label: "Borough", type:"DropDown", dropDownOptions:['Brooklyn', 'Queens', 'Bronx', 'Manhattan', 'Staten Island']},
    {name: "courtroom", label: "Courtroom", type:"DropDown", dropDownOptions:[...testCourtRooms, `210 Joralemon Street`]},
    {name: "judge", label: "Judge", type:"TextField", dropDownOptions:false},
    {name: "ada", label: "ADA", type:"TextField", dropDownOptions:false},
    {name: "docket", label: "Docket", type:"TextField", dropDownOptions:false},
    {name: "penalLaw", label: "Penal Law", type:"TextField", dropDownOptions:false},
]

const Case = () => {
    const duration = ['< 2 min', '2-5 min', '5+ min']
    const [isInterpreterNeeded, setIsInterpreterNeeded] = useState(false);
    const [isInterpreterPresent, setIsInterpreterPresent] = useState(false);
    // check why this turns into string when on state
    const handleIntNeeded = (e: any) => setIsInterpreterNeeded(!!e.target.checked)
    const handleIntPresent = (e: any) => setIsInterpreterPresent(!!e.target.checked)
    const today = () => {
        let returnDate: string | Date = new Date()
        let dd = String(returnDate.getDate()).padStart(2, '0')
        let mm = String(returnDate.getMonth()+1).padStart(2, '0')
        let yyyy = returnDate.getFullYear()
        returnDate = mm + "/" + dd + "/" + yyyy
        return returnDate
    }
  return (
    <div>
        <UploadForm/>
        <Header title="Case Information" />        
        <Grid container spacing={2}>
          {
              fieldsToPopulate.map(val => {
                  const dateDefault = (val.name === 'date') ? today() : ""
                  return <GridContainer 
                    xs={12}
                    componentName={val.type}
                    id={val.name}
                    name={val.name}
                    label={val.label}
                    autoComplete={val.name}
                    dropDownOptions={val.dropDownOptions}
                    defaultValue={dateDefault}
                />
              })
          }
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox onChange={e => handleIntNeeded(e)} id="interpreterNeeded" value={isInterpreterNeeded} color="secondary" name="interpreterNeeded" />}
                label="Interpreter Needed"
            />
            <FormControlLabel
                control={<Checkbox onChange={e => handleIntPresent(e)} id="interpreterPresent" value={isInterpreterPresent} color="secondary" name="interpreterPresent" />}
                label="Interpreter Present"
            />
            </Grid>
            <RadioButton value={""} id="duration" options={duration}/>
        </Grid>
    </div>
  );
}

export default Case;
