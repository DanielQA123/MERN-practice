'use strict';

import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import Navigation from "./Navigation";

const Standard = () => {

    return(
        <>
            <MyHeader/>
            <Navigation/>
            <main>
                <section>
                    <p> Something important</p>
                </section>
            </main>
            <MyFooter/>
        </>
    )
}

export default Standard; 