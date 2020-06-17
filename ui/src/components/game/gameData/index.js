import React from 'react';
import {Box, Grid,Typography} from '@material-ui/core';
import GameTable from "../gameTable";




export default function GameData({data, players}) {

    return (
        <Grid container>
            {
                (data) && (

                    <Grid item xs={12}>
                        <GameTable players={players} data={data} />
                    </Grid>
                )
            }
            {
                (!data) &&
                (
                    <Grid item xs={12}>
                        <Box textAlign="center">
                            <Typography>No game now</Typography>
                        </Box>
                    </Grid>
                )
            }
        </Grid>
    )
}

