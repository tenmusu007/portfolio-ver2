import styled from "styled-components";
export const StyledAboutMe = styled.section`
        font-family: 'Playfair Display', serif;
        width: 90%;
        margin: 0 auto;
        margin-top: 100px;
        height: auto;
        background-color: #00473E;
        background-color: #00ad97;
        background-color: #007a6b;
        background-image: url('${process.env.PUBLIC_URL}/img/bgimg2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        padding: 50px;
        color: white;
        .bgColor{
        background-color: rgb(255,255,255,75%);
        color: black;
        }
        .AboutMeTitle{
            text-align: center;
            margin: 15px 0 15px 0;
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
            padding: 10px 70px;
            line-height: 2.5;
        }
        .eduTxt{
            padding: 10px 30px;
        }
        .grid{
            margin-right: 16px;
        }
        .icontitle{
            padding-left: 30px;
            padding-top: 0.5rem;
        }
        .iconContainer{
            margin: 10px 0 0 0 ;
            padding-bottom: 10px
        }
        .iconbg{
            background-color: white;
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

`
