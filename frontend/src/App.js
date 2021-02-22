'use strict';

import Introduction from "./Components/First";
import Second from "./Components/Second"

const App = () => {
  return (
    <div className="App">
      <p>Dan-Dan says good morning</p>
      <Introduction/>
      <Second/>
    </div>
  );
}

export default App;
