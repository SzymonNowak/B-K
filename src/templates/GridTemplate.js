import React, { Component } from 'react';
import styled from 'styled-components'


    //grid w gridzie dla samych zdjec zrobic
    const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap:30px;
    justify-content: center;
    margin-right:15px;
    margin-left: 15px;



    @media screen and (max-width:1500px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap:30px;
    }
    @media screen and (max-width:1111px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width:768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;



const GridTemplate = ({children}) => {
    return (
            <Grid>
                {children}
            </Grid>
    )
}

export default GridTemplate;