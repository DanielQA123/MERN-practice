'use strict';

import Introduction from "./Components/01-Intro/First";
import Second from "./Components/01-Intro/Second";
import Biopic from "./Components/01-Intro/Biopic";
import Standard from "./Components/02-Parents-Child/Standard";

const App = () => {
  return (
    <div className="App">
      <p>Dan-Dan says good morning</p>
      {/* <Introduction/>
      <Second/> */}
      <Biopic/>
      <Standard/>
    </div>
  );
}

export default App;
