const { default: Film } = require("./Flim");

const SearchResults = ({ films, getDetails }) => {
    return (
        <div className="container">
            <div className="row">
                {films.map((film, i) => (
                    <div className="col-md-3" key={1}>
                        <Film key={i} {...film} getDetails={getDetails} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults;