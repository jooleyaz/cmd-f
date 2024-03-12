import React from 'react';
import HomeToBoardButton from '../../components/CloudButton';
import { useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/board'); 
      };
    return(

        <header className="App-header">

            <p>
            Leave a kind message for others!
            </p>
            <HomeToBoardButton onClick={handleClick} label="Leave a kind message for others <3" color="#efbbf0" />
        </header>
    );
}

export default Home;