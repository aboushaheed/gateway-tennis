import React from 'react';
import {Grid, TextField} from '@material-ui/core';
import RequiredTextField from "../../communs/RequiredTextField";
import DouceMode from "../../communs/DouceMode";




export default function Tennis({value,onChange,formErrors,onFormErrors}) {

    function copyAndOverride(obj, fields, value) {
        if (fields.length === 1) {
            return { ...obj, [fields[0]]: value };
        } else {
            const [firstField, ...otherFields] = fields;
            return {
                ...obj, [firstField]: copyAndOverride(obj[firstField], otherFields, value)
            }
        }
    }

    function isError(field) {
        return function (v) {
            if (onFormErrors) onFormErrors({ ...formErrors, [field]: v })
        }
    }
    function setField(field) {
        return function (v) {
            if (onChange) onChange(copyAndOverride(value, field.split('.'), v))
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs>
                <RequiredTextField
                    fullWidth
                    required
                    value={value.playerOneName || ''}
                    onChange={setField('playerOneName')}
                    label="Player one name"
                    max={20}
                    onError={isError('playerOneName')}
                    autoFocus
                />
            </Grid>
            <Grid item xs>
                <RequiredTextField
                    fullWidth
                    required
                    value={value.playerTwoName || ''}
                    onChange={setField('playerTwoName')}
                    label="Player two name"
                    onError={isError('playerTwoName')}
                    max={20}
                />
            </Grid>
            <Grid item xs>
                <RequiredTextField
                    fullWidth
                    required
                    value={value.matchName || ''}
                    onChange={setField('matchName')}
                    label="Match name"
                    onError={isError('matchName')}
                    max={30}
                />
            </Grid>
            <Grid item xs={3}>
                <DouceMode   onChange={setField("douceMode")} value={value.douceMode||false} label={"Douce Mode"}/>
            </Grid>
        </Grid>
    )
}

