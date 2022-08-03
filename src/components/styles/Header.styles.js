import styled from "styled-components";
export const StyledHeader = styled.header`
        /* position: sticky; */
        position: fixed; 
        top: 0;
        background-color: #D9D9D9;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px 0px ;
        z-index: 20;
        .headerImg{
        width: 20px;
        padding-left: 10px;
        }
        .headerMenu{
            display: flex;
            padding-right: 10px;
            p{
                padding: 0 10px 0 10px;
            }
        }
`