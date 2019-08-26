import Grid, { GridProps } from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DropDown from './tools/DropDown';
import React, {useState} from 'react';
import {Header, SubHeadersRow, cashBailContent, TextInput, bondBailContent, otherBailContent, CheckboxInput, rorContent, supervisedRelease, remand, DropDownInput, orderOfProtection} from './tools/non-functional-utilities';

// function Bail() {
//   const headers = ["", "Prosecution", "Defense", "Judge"]
//   return (
//     <React.Fragment>
//       <Typography variant="h5" gutterBottom>
//         Bail Information
//       </Typography>
//       <Grid direction="row" container spacing={2}>
//       {
//         headers.map((val) => {
//           return (
//             <HeaderComponent item xs={6} sm={3} direction="row" key={val} val={val} />
//           )
//         })
//       }
//       {/* here we want to change BodyComponent to render the information that we're looking for*/}
//       <BodyComponent direction="row" val="Bail" />
//       <BodyComponent direction="row" val="ROR" />
//       <BodyComponent direction="row" val="Remand" />
//       <BodyComponent direction="row" val="Supervised Release" />
//       <BodyComponent direction="row" val="Order of Protection" />
//       </Grid>
//     </React.Fragment>
//   );
// }

// interface Header extends GridProps {
//     val: string,
// }

// const bailDataFields = [
//   {id:"cashBail", name:"cashBail", label:"Cash Bail", autoComplete:"cashBail"},
//   {id:"bondBail", name:"bondBail", label:"Bond Bail", autoComplete:"bondBail"},
//   {id:"otherBail", name:"otherBail", label:"Other Bail", autoComplete:"otherBail"}
// ]

// const BodyComponent = (props: Header) => {
//   const {val, direction} = props
//   const arr = [0,1,2,3]
//   return (
//       <>
//       {arr.map(idx => {
//           const keyGrabber = bailDataFields[idx-1]
//           if (idx === 0) {
//               return (
//               <Grid direction={direction} item xs={6} sm={3}>
//                 <Typography variant="subtitle2" gutterBottom>
//                   {val}
//                 </Typography>
//               </Grid>
//               )
//           }
//           return (
//             <Grid direction="column" key={idx} item xs={6} sm={3}>
//               <TextField
//                 id={keyGrabber.id}
//                 name={keyGrabber.name}
//                 label={keyGrabber.label}
//                 autoComplete={keyGrabber.autoComplete}
//               />
//             </Grid>
//           )
//           }
//       ) 
//       }
//     </>
//   )
// }

// export default Bail;



/* start here */

interface IBailCategories {
  cashBail: number | null,
  bondBail: number | null,
  otherBail: number | null,
  ror: boolean,
  remand: boolean,
  supervisedRelease: boolean,
  orderOfProtection: 'Full' | 'Limited' | 'None'
}

const bailCategories: IBailCategories = {
  cashBail: null,
  bondBail: null,
  otherBail: null,
  ror: false,
  remand: false,
  supervisedRelease: false,
  orderOfProtection: 'None'
}

const bailRequestAndDisposition = {
  prosection: {...bailCategories},
  defense: {...bailCategories},
  judge: {...bailCategories},
}

export const Bail: React.FC = () => {
  const [bail, setBail] = useState(bailRequestAndDisposition)
    return (
      <React.Fragment>
        <Header title={'Bail Information'} />
        <SubHeadersRow />
        {/* Remove direction prop -- they'll all be direction */}
        <TextInput val="Cash Bail" direction="row" content={cashBailContent} />
        <TextInput val="Bond Bail" direction="row" content={bondBailContent} />
        <TextInput val="Other Bail" direction="row" content={otherBailContent} />
        <CheckboxInput val="ROR" content={rorContent} />
        <CheckboxInput val="Remand" content={remand} />
        <CheckboxInput val="Supervised Release" content={supervisedRelease} />
        <DropDownInput val="Order of Protection" content={orderOfProtection} dropDownOptions={['Full' , 'Limited' , 'None']} />
      </React.Fragment>
    )
}




// render each row




// DropDownInput

// const BodyComponent = (props: Header) => {
//   const {val, direction} = props
//   const arr = [0,1,2,3]
//   return (
//       <>
//       {arr.map(idx => {
//           const keyGrabber = bailDataFields[idx-1]
//           if (idx === 0) {
//               return (
//               <Grid direction={direction} item xs={6} sm={3}>
//                 <Typography variant="subtitle2" gutterBottom>
//                   {val}
//                 </Typography>
//               </Grid>
//               )
//           }
//           return (
//             <Grid direction="column" key={idx} item xs={6} sm={3}>
//               <TextField
//                 id={keyGrabber.id}
//                 name={keyGrabber.name}
//                 label={keyGrabber.label}
//                 autoComplete={keyGrabber.autoComplete}
//               />
//             </Grid>
//           )
//           }
//       ) 
//       }
//     </>
//   )
// }