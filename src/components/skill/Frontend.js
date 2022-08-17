import React from 'react'
import { Grid } from '@mui/material'
import { Icon } from '@iconify/react';
import { StyledFrontend } from "../../styles/Frontend.styled";

const Frontend = () => {
  const iconArr = [{icon : "logos:html-5"},{icon : "vscode-icons:file-type-js-official"}, {icon : "fontisto:jquery", color : "blue"}, {icon : "logos:react"}] 
  const iconArrStyle = ["logos:css-3", "vscode-icons:file-type-scss", "logos:material-ui", "logos:bootstrap"]
  return (
    <StyledFrontend>
      <h3 className='icontitle'>Forntend</h3>
    <Grid  rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }} className="grid">
        <Grid item xs={12} className="iconContainer">
          {iconArr.map((icon, index) => {
            return (
              <div className = "iconbg" key={index}>
                <Icon icon={icon.icon} className="icon" color={icon.color} />
              </div>
            )
          })}
      </Grid>
        <Grid item xs={12} className="iconContainer">
          {iconArrStyle.map((icon,index) => {
            return (
              <div className="iconbg" key={index}>
                <Icon icon={icon} className="icon"  />
              </div>
            )
          })}
      </Grid>
    </Grid>
    </StyledFrontend>
  )
}

export default Frontend