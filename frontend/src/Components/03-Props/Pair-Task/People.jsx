'use strict';

import Individual from ".";
import People from "./People.json";

const User = () => {

    const People = User;
    
    return (
        <>
            {People.map((person) => (
                <Individual
                    key={person.id}
                    name={person.name}
                    city={person.address.city}
                    info={person}
                    website={person.website}
                />
            ))}
        </>
    );
}

export default User;