import React, {useState, useEffect } from 'react'
import styled from "styled-components";

//const URL_LOGIN = 'http://127.0.0.1:5000/spotify_authenticate';


//Login function for starting backend
export default function Login(){    
    const [data,setData] = useState([{}])

    const LoginClick = () => {
        //API backend call
        fetch("/spotify_authenticate")
            .then(req => req.json()
            )               
            .then(
                data => {
                    setData(data)
                    console.log(data)
                }
            )            
    };

    return (
    
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" 
        alt="spotify"
        />
        <button onClick={LoginClick}>Connect Spotify</button>               
    </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db955;
    gap: 3rem;
    img{
        height: 30vh;
    }
    button {
        width: 30rem;
        align-items: center;
        justify-content: center;
        padding:1.3rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        font-size: 1.9rem;
        cursor: pointer;
    }
`;