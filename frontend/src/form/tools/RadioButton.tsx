import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React, {useState} from 'react';


interface RadioProps {
    id: string,
    options: (string | number)[],
    value: string,
}

const RadioButton = (props: RadioProps) => {
    const {id, options} = props;
    const [selectValue, setSelectValue] = useState("")
    function handleChange(event: any) {
        let { value } = props;
        setSelectValue(event.target.value);
        value = event.target.label;
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
                    options.map((val, idx) => {
                        return (
                            <FormControlLabel
                                id={val.toString()}
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