import styled from "styled-components";
export const StyledWork = styled.section`
            font-family: 'Playfair Display', serif;
            width: 75%;
            margin: 0 auto;
            margin-top: 85px;
            height: auto;
            background-color: #F8F8F8;
            padding: 50px 0;
            border: 2px solid black;
            .WorkTitle{
                text-align: center;
                margin-bottom: 20px;
                font-size: 35px;
                font-family: sans-serif;
                font-weight: 300;
            }
            .WorkImgContainer{
                width: 50%;
                /* height: 250px; */
                margin: 0 auto;
                .WorkImg{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    box-shadow:  22px 22px 44px #d3d3d3,
                    -22px -22px 44px #ffffff;
/* box-shadow: inset 35px 35px 70px #bfbfbf,
            inset -35px -35px 70px #ffffff; */
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
