import React, {useState} from 'react';
import './App.css';
import BudgetPlanner from './components/budget-planner/BudgetPlanner';
import OAuth from './components/sign-in/OAuth';

const App = () => {
  const [ username, setUsername ] = useState(null);
  return (
    <div className="App">
      {
        username ?
          <BudgetPlanner userName={username}></BudgetPlanner> :
          <OAuth login={username => setUsername(username)}></OAuth>
      }
    </div>
  );
};

export default App;
