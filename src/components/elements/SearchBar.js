import React from "react";
import Input from "./Input";
import JSONDATA from './MOCK_DATA.json'
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosClose } from "react-icons/io"


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
        <div className="has-icon-left has-icon-right">
        <Input className='form-input' type='search' placeholder='Search...'/>
        <AiOutlineSearch/>
        <span className="svg-container"><IoIosClose /></span>
        </div>
        <div className="form-hint"><b>test</b></div>

        
      

        <div>
            
      
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