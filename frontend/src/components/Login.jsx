import React from "react";
import styled from "styled-components";

//Login function
export default function Login(){
    
    //handle click event
    const handleClick = () =>{

        alert("clicked");
    };

    return <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" 
        alt="spotify">            
        </img>
        <button onClick={handleClick}>Connect Spotify</button>

    </Container>;

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
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        font-size: 1.6rem;
        cursor: pointer;
    }
`;