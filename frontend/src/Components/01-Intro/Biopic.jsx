'use strict';

const myInfo = () => {

    const name = `Daniel`;
    const age = `22`;
    const occupation = `Student at QA`;
    const favFood = `Dan-Dan noodles`;


    return (
        <>
            <h1>My Bio</h1>
            <p>{name}</p>
            <p>{age}</p>
            <p>{occupation}</p>
            <p>My Favourite Food at the moment is {favFood}</p>
        </>
    );
}

export default myInfo; 