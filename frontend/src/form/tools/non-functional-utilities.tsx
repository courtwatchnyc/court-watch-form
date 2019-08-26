import Typography from '@material-ui/core/Typography';
import React from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import DropDown from './DropDown';

// the header of each stepped through part of the form
export interface IHeaderProps {
    title: string;
}
  
export const Header: React.FC<IHeaderProps> = (props) => {
    const {title} = props;
    return (
        <React.Fragment>
        <Typography variant="h5" gutterBottom>
        {title}
        </Typography>
    </React.Fragment>
    )
}

// rendering the subheaders for the Bail Matrix
export const SubHeadersRow = () => {
    const subHeaderHeadings = ["", "Prosecution", "Defense", "Judge"];
    return (
        <Grid direction="row" container spacing={2}>
        {
            subHeaderHeadings.map((val) => {
            return (
                <SingleSubHeader item xs={6} sm={3} direction="row" key={val} val={val} />
            )
            })
        }
        </Grid>
    )
}

interface ISubheaderProps extends GridProps {
val: string
}

const SingleSubHeader = (props: ISubheaderProps) => {
    const {val, direction} = props;
    const arr = [0,1,2,3];
    return (
        <>
        {arr.map(idx => {
            if (idx === 0) {
                return (
                <Grid direction={direction} item xs={6} sm={3}>
                    <Typography variant="subtitle2" gutterBottom>
                    {val}
                    </Typography>
                </Grid>
                )
        }})}
        </>
    )
}

// Bail Matrix Text Fields with Content

export const cashBailContent = {id: 'cashBail', name: 'cashBail', label: 'Cash Bail', autoComplete: 'Cash Bail'}
export const bondBailContent = {id: 'bondBail', name: 'bondBail', label: 'Bond Bail', autoComplete: 'Bond Bail'}
export const otherBailContent = {id: 'otherBail', name: 'otherBail', label: 'Other Bail', autoComplete: 'Other Bail'}
export const rorContent = {id: 'ror'}
export const remand = {id: "remand"}
export const supervisedRelease = {id: "supervisedRelease"}
export const orderOfProtection = {id: 'orderOfProtection', name: 'orderOfProtection', label: 'O of P', autoComplete: 'O of P'}

interface IContentComponentProps extends ISubheaderProps {
  content: {[key: string]: string},
  dropDownOptions?: string[]
}

// TextInput
export const TextInput = (props: IContentComponentProps) => {
  const {val, direction, content} = props
  const renderFourColumns = [0,1,2,3]
  return (
      <Grid container spacing={2}>
      {renderFourColumns.map(idx => {
          if (idx === 0) {
              return (
              <Grid direction={direction} item xs={3} sm={3}>
                <Typography variant="subtitle2" gutterBottom>
                  {val}
                </Typography>
              </Grid>
              )
          }
          return (
            <Grid direction="row" key={idx} item xs={3} sm={3}>
              <TextField
                id={content.id}
                name={content.name}
                label={content.label}
                autoComplete={content.autoComplete}
              />
            </Grid>
          )
          }
      ) 
      }
    </ Grid>
  )
}




export const CheckboxInput = (props: IContentComponentProps) => {
    const {val, direction, content} = props
    const renderFourColumns = [0,1,2,3]
    return (
        <Grid container spacing={2}>
        {renderFourColumns.map(idx => {
            if (idx === 0) {
                return (
                <Grid direction={direction} item xs={3} sm={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    {val}
                  </Typography>
                </Grid>
                )
            }
            return (
              <Grid direction="row" key={idx} item xs={3} sm={3}>
                <Checkbox
                  id={content.id}
                />
              </Grid>
            )
            }
        ) 
        }
      </ Grid>
    )
  }


  export const DropDownInput = (props: IContentComponentProps) => {
    const {val, direction, content, dropDownOptions} = props
    const renderFourColumns = [0,1,2,3]
    return (
        <Grid container spacing={2}>
        {renderFourColumns.map(idx => {
            if (idx === 0) {
                return (
                <Grid direction={direction} item xs={3} sm={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    {val}
                  </Typography>
                </Grid>
                )
            }
            return (
              <Grid direction="row" key={idx} item xs={3} sm={3}>
                <DropDown
                  id={content.id}
                  name={content.name}
                  label={content.label}
                  autoComplete={content.autoComplete}
                  dropDownOptions={dropDownOptions!}
                />
              </Grid>
            )
            }
        ) 
        }
      </ Grid>
    )
  }
  