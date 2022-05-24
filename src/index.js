import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// React Forms
function MyForm(){
    return (
        <form>
            <label>enter your name:
                <input type="text" />
            </label>
        </form>
    )
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);

// Handling Forms
// Use the useState Hook to manage the input

function MyForm2(){
    const [name,setName] = useState("");
    return(
        <form>
            <label>enter your name:
                <input 
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} 
                />
            </label>
        </form>
    )
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm2/>);

// Submitting Forms
function MyForm3(){
    const [name,setName]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`This name you entered was:${name}`);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input type="submit" />
            </form>
        </>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm3/>);

// Multiple Input Fields

function MyForm4(){
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input 
                    type="text" 
                    name="username"
                    value={inputs.username||""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input 
                    type="number"
                    name="age"
                    value={inputs.age||""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}


// Textarea
function MyForm5(){
    const [textarea,setTextarea]=useState(
        "The content of a textarea goes in the value attribute"
    )
    const handleChange = (e) => {
        setTextarea(e.target.value)
    }
    return(
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

// Select
function MyForm56(){
    const [myCar,setMyCar] = useState("Volvo");

    const handleChange = (e) => {
        setMyCar(e.target.value)
    }
    return(
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm56/>);