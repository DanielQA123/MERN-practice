'use strict';

import Introduction from "./Components/01-Intro/First";
import Second from "./Components/01-Intro/Second";
import Biopic from "./Components/01-Intro/Biopic";
import Standard from "./Components/02-Parents-Child/Standard";
import PropsComp from "./Components/03-Props/Props_Tutorial/PropsComp"
;
import Individual from "./Components/03-Props/Pair-Task/Individual";

import People from "./Components/03-Props/Pair-Task/People";
import EmployeeTutorial from "./Components/10-Data-Requests/EmployeeTutorial";

const App = () => {
  return (
    <div className="App">
      <p>Dan-Dan says good morning</p>
      {/* <Introduction/>
      <Second/> */}
      {/* <Biopic/>
      <Standard/> */}
      {/* <PropsComp/> */}
      {/* <People/> */}
      <EmployeeTutorial/>
    </div>
  );
}

export default App;
