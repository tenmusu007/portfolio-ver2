import styled from "styled-components";
export const StyledAboutMe = styled.section`
        font-family: 'Playfair Display', serif;
        width: 75%;
        margin: 0 auto;
        margin-top: 100px;
        height: auto;
        background-image: url('${process.env.PUBLIC_URL}/img/bgimg4.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        padding: 50px;
        color: white;
    @media only screen and (max-width: 900px) {
            height: 100vh;
            background-image: url('${process.env.PUBLIC_URL}/img/bgimg4.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;    
            background-position-x: 50%;
            height: auto;
            padding: 30px;


    }
        .bgColor{
        background-color: rgb(255,255,255,75%);
        color: black;
        }
        .AboutMeTitle{
            text-align: center;
            margin: 15px 0 15px 0;
            padding-top: 30px;
            font-weight: 300;
            font-size: 30px;
            font-family: sans-serif;
        }
        .imgContainer{
            width: 75%;
            height: 300px;
            margin: 0 auto;
        }
        .AboutMeImg{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        .aboutTxt{
            padding: 20px 70px;
            line-height: 2;
        }
        .grid{
            margin-right: 16px;
        }
        .iconWrapper{
            display: flex;
            text-align: center;
            justify-content: center;
        @media only screen and (max-width: 900px) {
            display: flex;
            flex-wrap: wrap;
        }
        }
        .icontitle{
            padding-top: 0.5rem;
        }
        @media only screen and (max-width: 900px) {
            /* padding-left: 0; */
        }
        .iconContainer{
            margin: 10px 0 0 0 ;
            padding-bottom: 10px
        }
        .iconbg{
            /* background-color: white; */
            text-align: center;
            border-radius: 12px;
            display: inline-block;
            width: 50px;
            box-sizing: 10px;
            margin: 0 10px ;
        }
        .icon{
            margin: 5px 10px 0 10px;
            font-size: 25px;
        }
        @media only screen and (max-width: 600px) {
            .aboutTxt{
                width: 75%;
                padding: 0px 0px;
                line-height: 2;
                font-size: 10px;
                margin: 0 auto;
            }
            .imgContainer{
                width: 75%;
                height: 240px;
                margin: 0 auto;
            }
            .AboutMeTitle{
            text-align: center;
            margin: 15px 0 0px 0;
            padding-top: 30px;
            font-weight: 300;
            font-size: 20px;
            font-family: sans-serif;
        }
        .icontitle{
            padding-top: 0.5rem;
            font-size: 15px;
        }
        }
            
            `
