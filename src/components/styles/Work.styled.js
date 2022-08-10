import styled from "styled-components";
export const StyledWork = styled.section`
            font-family: 'Playfair Display', serif;
            width: 90%;
            margin: 0 auto;
            margin-top: 85px;
            height: auto;
            background-color: white;
            padding: 50px 0;
            border: 2px solid black;
            .WorkTitle{
                text-align: center;
                color: #00473E;
                margin-bottom: 20px;
            }
            .WorkImgContainer{
                width: 50%;
                /* height: 250px; */
                margin: 0 auto;
                .WorkImg{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    outline: 1.5px solid black;
                    -webkit-box-shadow: 5px 5px 15px 5px #6B6B6B; 
                    box-shadow: 5px 5px 15px 5px #6B6B6B;
                }
            }
                .workTxt{
                padding: 10px 30px;
                text-align: center;
            }
            .grid{
                margin-top: 30px;
                transition: all .2s ease-in-out;
                a{
                    text-decoration: none;
                    color: #00473E;
                }
                :hover{
                    transform: scale(1.1);
                }
            }
`
