import styled from "styled-components";
export const StyledIntro = styled.section`
    width: 90%;
    margin: 0 auto;
    margin-top: 100px;
    padding: 50px 0;
    display: flex;
    height: auto;
    background-color: rgb(55,15,15,50%);
    justify-content: space-evenly;
    align-items: center;
    /* opacity: 50%; */
    .introImg{
        width: 200px;
        height: 200px;
        background-color: aqua;
    }
    .introTxt{
        text-align: center;
        p{
            color: white;
            font-size: 30px;
            padding:10px 5px;
        }
    }
`