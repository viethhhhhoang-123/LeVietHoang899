import React, { useEffect, useState } from "react";
import axios from "axios";
import ListMessage from "./ListMessage";
import Button from 'react-bootstrap/Button';

const URL = "https://60dff0ba6b689e001788c858.mockapi.io/heroes";
//hoan toan dat 1 link thanh 1 bien const

const ListHeroes = () => {
    const [heroes, setHeroes] = useState([]);
    const [select, setSelect] = useState({
        id: -1,
        name: ""
    })
    const [messages, setMessages] = useState([]);

    const handleChange = (event) => {
        const filterArray = [...heroes.filter(x => x.id !== select.id), {
            id: select.id,
            name: event.target.value
        }];
        filterArray.sort((x,y) => x.id - y.id);
        setHeroes(filterArray);

    }

    const clearMessages = () => {
        setMessages([]);
        
    }

    useEffect(()=>{
        axios.get(URL).then((result) => {
            setHeroes(result.data)
           
        })
    }, [])
    return (
        <div>
            <h1 style={{fontFamily:"cursive",textDecoration:""}}>&nbsp;&nbsp;MARVEL vs DC Heroes</h1>
            
            <div>
                <ul style={{listStyleType: "none"}}>
                    {heroes.map(hero => 
                    <li sty key={hero.id}>
                        <button className="btn btn-outline-success" onClick={()=>{
                            setSelect(hero);
                            setMessages([...messages, hero.id]);
                        }}>
                            {hero.id} | {hero.name}
                            
                        </button>
                        <p></p>
                    </li>
                    
                    )}
                </ul>
                <div>
                    <p style={{ fontFamily: "cursive",textDecoration:"underline"}}>
                        {select.name.toUpperCase()} DETAILS 
                    </p>
                    <p>
                        id: {select.id > 0 ? select.id : undefined}
                    </p>
                    <div>
                        <label>
                            Hero name
                            <input className="form-control"
                                name="name"
                                type="textbox"
                                onChange={handleChange}
                                />
                        </label>
                        <p></p>
                    </div>
                    <div>
                       <button className="btn btn-outline-primary" onClick={clearMessages}>
                           Refresh message box
                       </button>
                    </div>
                    <p></p>
                    <center>
                    <div style={{width:"25%"}}>
                        <div style={{backgroundColor: "green", color:"white"}}>
                        <ListMessage list={messages}/>
                        </div>    
                    </div>      
                    </center>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default ListHeroes;