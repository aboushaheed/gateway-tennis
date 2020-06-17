import React from 'react';
import {  FormControlLabel, Checkbox } from '@material-ui/core';

export default function DouceMode({value,onChange,label,...props}) {

    const handleChange = () => {
        onChange(!value);
    }

    return (
        <FormControlLabel
            data-test-id="check_form_control"
            control={
                <Checkbox
                    checked={value}
                    onChange={handleChange}
                    color="primary"
                />
            }
            label={label}
            {...props}
        />
    );

}
