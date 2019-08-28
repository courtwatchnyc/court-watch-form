import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';


export interface DropDownProps {
    id: string,
    name: string,
    autoComplete: string,
    dropDownOptions: (string | number)[] | boolean,
    label: string,
    width?: number,
    sm?: number,
}

interface State {
    value: string,
}

const DropDown = (props: DropDownProps) => {
    const {id, name, dropDownOptions, label} = props
    const valuesForDropDown: (string | number)[] = Array.isArray(dropDownOptions) ? dropDownOptions : [10, 20, 30]
    const {width} = props
  const [value, setValue] = React.useState('');
  const inputLabelRef = React.useRef(null);

  const handleChange = (event: any) => {
    setValue((event.target as HTMLSelectElement).value);
  };

  return (
    <div>
      <FormControl fullWidth={true}>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Select
          native
          value={value}
          onChange={(e) => handleChange(e)}
          inputProps={{
            name,
            id,
          }}
        >
          <option value="" />
          {
              valuesForDropDown.map((val, idx) => {
                return <option key={val} value={valuesForDropDown[idx]}>{val}</option>
              })
          }
        </Select>
      </FormControl>
    </div>
  );
}

export default DropDown;