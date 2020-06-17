import React from 'react';
import { Typography } from '@material-ui/core';
import GlobalFrame from "../globalFrame/GlobalFrame";

export default function Home() {
    return (
        <GlobalFrame>
            <Typography variant="h6">Hello to this tennis match</Typography>
        </GlobalFrame>
    );
}