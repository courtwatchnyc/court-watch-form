import Grid, { GridProps } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DropDown from './tools/DropDown';
import React from 'react';

//not in use for /material route
function Bail() {
  const headers = ["", "Prosecution", "Defense", "Judge"]
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Bail Information
      </Typography>
      <Grid direction="row" container spacing={2}>
      {
        headers.map((val) => {
          return (
            <HeaderComponent item xs={6} sm={3} direction="row" key={val} val={val} />
          )
        })
      }
      <BodyComponent direction="row" val="Bail" />
      <BodyComponent direction="row" val="ROR" />
      <BodyComponent direction="row" val="Remand" />
      <BodyComponent direction="row" val="Supervised Release" />
      <BodyComponent direction="row" val="Order of Protection" />
      </Grid>
    </React.Fragment>
  );
}

interface Header extends GridProps {
    val: string,
}

const HeaderComponent = (props: Header) => {
  const {val, direction} = props
  const arr = [0,1,2,3]
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

const BodyComponent = (props: Header) => {
  const {val, direction} = props
  const arr = [0,1,2,3]
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
          }
          return (
            <Grid direction="row" key={idx} item xs={6} sm={3}>
              <DropDown
                id="volunteerName"
                name="volunteerName"
                label="Volunteer name"
                autoComplete="vname"
                dropDownOptions={['a', 'b', 'c']}
              />
            </Grid>
          )
          }
      ) 
      }
    </>
  )
}

export default Bail;