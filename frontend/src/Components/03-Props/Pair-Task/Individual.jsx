'use strict';

const Individual = (props) =>{
    return (
    <>
    <p key={props.id}>Hey there {props.name}, Where are you from {props.city}</p>
    </>
    )
}

export default Individual;