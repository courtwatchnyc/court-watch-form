import React, {useState} from 'react';
import {Header, SubHeadersRow, cashBailContent, TextInput, bondBailContent, otherBailContent, CheckboxInput, rorContent, supervisedRelease, remand, DropDownInput, orderOfProtection} from './tools/non-functional-utilities';

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