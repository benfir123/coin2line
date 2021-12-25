import React from "react";
import Input from "./Input";
import JSONDATA from './MOCK_DATA.json'
import { useState } from "react";


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
        
        <div className="container">
            <Input className="form-input" type='textarea' placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            {JSONDATA.filter((val)=> {

                if (searchTerm === "") {

                    return val
                } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {

                    return val

                } else return null;

            }).map((val, key)=> {

                return (
                    <div>
                        <p>{val.first_name}</p>
                    </div>
                )
            }
            
            
            
            )}
        </div>
        
        </>
        

    )
        
}

export default SearchBar;