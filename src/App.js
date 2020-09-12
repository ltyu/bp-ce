import React, {useContext} from 'react';
import './App.css';
import BudgetPlanner from './components/budget-planner/BudgetPlanner';
import OAuth from './components/sign-in/OAuth';
import {AuthContext} from './hooks/AuthHook';

const App = () => {
  const [authState] = useContext(AuthContext);

  return (
    <div className="App">
        {
          authState.user ?
            <BudgetPlanner userName={authState.user.givenName}></BudgetPlanner> :
            <OAuth></OAuth>
        }
    </div>
  );
};

export default App;
