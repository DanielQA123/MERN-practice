import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const Film = (props) =>{
    return(
        <>
        <Card style={{height: "450px", marginTop:"5px"}}>
            <CardImg src={props.Poster} height="300px"/>
            <CardBody>
                <CardTitle>{props.Title}</CardTitle>
                <CardSubtitle>Year: {props.Year}</CardSubtitle>
                <hr/>
                <div className="col-md-12">
                    <button className="btn btn-outline-info" onClick={() => props.getDetails(props.imdb)}>View </button>
                </div>
            </CardBody>
        </Card>
        </>
    )
}

export default Film;