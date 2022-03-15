import { useState } from "react";

const Home = () => {
    const [name, editName] = useState('myname');
    const [age, editAge] = useState(19);


    const handleClick = () => {
        editName('yourname');
        editAge(25);
    }
    

    return ( 
        <div className="home">
            <h1>my home</h1>
            <p>my name is {name} and I {age} years old. </p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;