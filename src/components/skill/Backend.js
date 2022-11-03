import React from 'react'
import { Grid } from '@mui/material'
import { Icon } from '@iconify/react';
import { StyledFrontend } from '../styles/Frontend.styled'

const Backend = () => {
  const iconArr = [
		{ icon: "vscode-icons:file-type-node" },
		{ icon: "logos:firebase" },
		{ icon: "logos:mongodb-icon" },
		{ icon: "logos:postgresql"},
		// { icon: "logos:npm", width: "70px", size: "15px" },
	];
  return (
    <StyledFrontend>
      <h3 className='icontitle'>Backend</h3>
    <Grid rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }}className="grid">
        <Grid item xs={12} className="iconContainer">
        {iconArr.map((icon, index) => {
          return (
            <div className="iconbg" key={index} style={{ "width": `${icon.width}` }}>
              <Icon icon={icon.icon} className="icon" style={{ "fontSize": `${icon.size}` }} />
            </div>
          )
        })}
      </Grid>
      </Grid>
    </StyledFrontend>

  )
}

export default Backend