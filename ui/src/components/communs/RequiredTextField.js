import React from 'react';
import {TextField} from '@material-ui/core';

export default function RequiredTextField({max,onError,value,onChange,...props}) {

    const [firstTime, setFirstTime] = React.useState(true);

    const checkValue = event => {
        const { value } = event.target;
        if (!value) {
            onError(true);
        } else if (value.length > max) {
            onError(true);
        } else {
            onError(false);
        }
        setFirstTime(false);
        onChange(value);
    };

    const isError = function () {
        if (!firstTime && !value) {
            return "This field is mandatory";
        } else if (!firstTime && value.length > max) {
            return `the maximum size is ${max} chars`;
        }
    };

    return (
        <TextField
            test-id="required_text_field"
            fullWidth
            required
            value={value}
            error={!!isError()}
            variant="outlined"
            onChange={checkValue}
            helperText={isError()}
            {...props}
        />
    )
}
