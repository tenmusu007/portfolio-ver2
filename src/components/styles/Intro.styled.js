import styled from "styled-components";
export const StyledIntro = styled.section`
        font-family: 'Playfair Display', serif;
        height: 100vh;
        /* background-color: #00473E; */
        margin-top: 2rem;
        padding-bottom: 3rem;
        background-image: url('${process.env.PUBLIC_URL}/img/bgimg4.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    .welcome{
        color: white;
        text-align: center;
        padding-top: 40px;
        font-size: 3rem;
        text-shadow: 2px 8px 2px rgba(0,0,0,0.3);

    }
    .section{
        padding: 60px 0 100px 0;
        text-align: center;
        .name{
            font-size: 4rem;
            color: white;
            text-align:center;
            margin: 2rem 0;
            /* text-shadow: 10px; */
            text-shadow: 2px 8px 2px rgba(0,0,0,0.3);
        }
        .frontend{
            text-align: center;
            font-size: 2rem;
            color: white;
            padding-bottom: 2rem;
            text-shadow: 2px 8px 2px rgba(0,0,0,0.3);
        }
        .btnFont{
            color: white;
        }
    }
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