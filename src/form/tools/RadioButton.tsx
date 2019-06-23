import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React, {useState} from 'react';


interface RadioProps {
    options: (string | number)[]
}

const RadioButton = (props: RadioProps) => {
    const [selectValue, setSelectValue] = useState("")
    function handleChange(event: React.ChangeEvent<unknown>) {
        console.log("handleChange");
        setSelectValue((event.target as HTMLInputElement).value);
    };

    return (
    <Grid item>
        <FormControl>
            <FormLabel>Duration of the Case</FormLabel>
            <RadioGroup
                style={{ flexDirection: "row" }}
                value={selectValue}
                onChange={handleChange}
            >
            {
                props.options.map((val, idx) => {
                    return (
                        <FormControlLabel
                            key={val}
                            control={<Radio />}
                            label={val}
                            value={(++idx).toString()}
                        />
                    )
                })
            }
            </RadioGroup>
        </FormControl>
    </Grid>
    )
}

export default RadioButton