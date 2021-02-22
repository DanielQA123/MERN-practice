'use strict';

import Introduction from "./Components/01-Intro/First";
import Second from "./Components/01-Intro/Second";
import Biopic from "./Components/01-Intro/Biopic";
import Standard from "./Components/02-Parents-Child/Standard";
import PropsComp from "./Components/03-Props/Props_Tutorial/PropsComp"
;
const App = () => {
  return (
    <div className="App">
      <p>Dan-Dan says good morning</p>
      {/* <Introduction/>
      <Second/> */}
      {/* <Biopic/>
      <Standard/> */}
      <PropsComp/>
    </div>
  );
}

export default App;
