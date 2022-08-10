import styled from "styled-components";
export const StyledDetailWork = styled.section`
    font-family: 'Playfair Display', serif;
    background-color: #00473E;
    height: 100vh;
    .title{
        color: white;
        padding-top: 5rem;
        text-align: center;
    }
    .cardConatiner{
        text-align: center;
        width: 60%;
        height: 350px;
        height: auto;
        height: 50vh;
        background-color: #F2F7F5;
        margin: 0 auto ;
        margin-top: 1rem;
        .cardtxt{
            padding-bottom: 1rem;
        }
        .btn{
            margin: 0 10px 0 10px;
            color: white;
        }
    }
    .picContainer{
        width: 100%;
        text-align: center;
        .pic{
            width: 40%;
            padding: 10px;
            margin: 1.5rem auto;
            object-fit: contain ;
            transition: all .3s ease-in-out;
            &:hover{
                transform: scale(1.2);
            }
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
`