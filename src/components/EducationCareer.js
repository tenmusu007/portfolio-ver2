import React from 'react'
import { Grid } from '@mui/material'
import { Icon } from '@iconify/react';


export const EducationCareer = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
            <Grid item xs={12}>
                <Icon icon="logos:html-5" />
                <Icon icon="vscode-icons:file-type-js-official" />
                <Icon icon="logos:jquery" />
                <Icon icon="logos:react" />
            </Grid>
            <Grid item xs={12}>
                <Icon icon="logos:css-3" />
                <Icon icon="vscode-icons:file-type-scss" />
                <Icon icon="logos:tailwindcss-icon" />
                <Icon icon="logos:material-ui" />
                <Icon icon="logos:bootstrap" />
            </Grid>
        </Grid>
    )
}
