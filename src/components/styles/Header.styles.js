import styled from "styled-components";
export const StyledHeader = styled.header`
        /* position: sticky; */
        font-family: 'Playfair Display', serif;
        align-items: center;
        height: 50px;
        color: #00473E;
        position: fixed; 
        top: 0;
        background-color: #FFFFFE;
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
            padding-right: 30px;
            p{
                padding: 0 15px 0 15px;
                margin-left: 5px;
                transition: all 1.5s ease-in-out;
            }
            p:hover{
                /* outline:  1px solid #00473E; */
                background-color: #00473E;
                color: white;
            }
            a{
                color: #00473E;
                text-decoration:none;
                transition: all 1s ease-in-out;
            }
            a:hover{
                color: white;
            }
        }
        .homeBtn{
            
        }
`