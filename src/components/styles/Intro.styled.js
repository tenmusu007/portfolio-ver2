import styled from "styled-components";
export const StyledIntro = styled.section`
    width: 90%;
    margin: 0 auto;
    margin-top: 100px;
    display: fixed;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(55,15,15,50%);
    /* opacity: 50%; */
    .introImg{
        width: 200px;
        height: 200px;
        background-color: aqua;
    }
    .introTxt{
        p{
            text-align: center;
            color: white;
            font-size: 30px;
            padding:5px 5px;
        }
    }
    .btn{
        margin: 10px;
    }
`