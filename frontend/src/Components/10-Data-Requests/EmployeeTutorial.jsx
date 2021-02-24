'use strict';

import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';

const EmployeeInfo = () => {

    //State For Error
    const [error, setError] = useState(null);
    //State For loading
    const [isLoaded, setIsLoaded] = useState(false);
    //State for data
    const [items, setItems] = useState([]);

    useEffect(() => {

        axios.get("http://dummy.restapiexample.com/api/v1/employees")
            .then((res) => res)
            .then((result) => {
                setIsLoaded(true);
                setItems(result.data.data);
            },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if(error){
        return <div>Error: {error.message}</div>;
    }else if (!isLoaded){
        return<div>Loading...</div>;
    }else{
        return(
            <ul>
                {console.log(items)}
                {items.map((item)=>(
                    <li key={item.id}>
                        {item.employee_name}
                    </li>
                ))}
            </ul>
        );
    }
}

export default EmployeeInfo;
