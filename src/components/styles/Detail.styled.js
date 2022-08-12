import styled from "styled-components";
export const StyledDetailWork = styled.section`
    font-family: 'Playfair Display', serif;
    /* background-color: #00473E; */
    height: 100vh;
    .grid{
        padding-top: 4rem;
        text-align: center;
    }
    .title{
        color: #00473E;
        padding-top: 3rem;
        text-align: center;
    }
    .cardConatiner{
        text-align: center;
        width: 60%;
        height: 350px;
        height: auto;
        height: 60vh;
        background-color: #F2F7F5;
        margin: 0 auto ;
        margin-top: 1rem;
        .cardtxt{
            padding-bottom: 1rem;
        }
    }
    .btn{
        margin: 20px 10px 0 10px;
        color: white;
        min-width: auto;
    }
    .back{
        margin: 30px 10px 0 10px;
        color: white;
        min-width: auto;
    }
    .forward{
        margin: 20px 10px 0 10px;
        color: black;
        min-width: auto;
        padding: 6px 16px;
    }
    .picContainer{
        width: 100%;
        text-align: center;
        .pic{
            width: 80%;
            padding: 10px;
            margin: 1rem auto 0 auto;
            object-fit: contain ;
        }
    }
    .repo{
        color: white;
        text-align: center;
    }
    .repoUrl{
        text-align: center;
        color: white;
        padding-top: 10px;
        
    }
        @media only screen and (max-width: 600px) {
        .title{
        color: #00473E;
        padding-top: 0.5rem;
        padding-bottom: 2rem;
        text-align: center;
    }
    .picContainer{
        width: 100%;
        text-align: center;
        .pic{
            width: 60%;
            padding: 10px;
            margin: 1rem auto 0 auto;
            object-fit: contain ;
        }
    }
    .grid{
    padding-top: 2rem;
    text-align: center;
    }
    .btn{
        margin: 20px 10px 0 10px;
        color: white;
        min-width: 0;
        font-size: 10px;
    }
    .forward{
        margin: 20px 10px 0 10px;
        color: black;
        min-width: 0;
        font-size: 10px;
    }
        }
`