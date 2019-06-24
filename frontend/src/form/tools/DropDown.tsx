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
    age: string,
    labelWidth: number | undefined
}

const DropDown = (props: DropDownProps) => {
    const {dropDownOptions, label} = props
    const valuesForDropDown: (string | number)[] = Array.isArray(dropDownOptions) ? dropDownOptions : [10, 20, 30]
    const {width} = props
  const [state, setState] = React.useState<State>({
    age: '',
    labelWidth: width,
  });
  const inputLabelRef = React.useRef(null);

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<{ value: unknown }>) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl fullWidth={true}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
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