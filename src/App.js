import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import NewAssignment from './components/NewAssignment'
import {BrowserRouter, Switch,  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Gradebook
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Assignment} />
        <Route exact path='/assignment' component={Assignment} />
        <Route path='/newassignment' component={NewAssignment}/>
        <Route path='/gradebook' component={Gradebook} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
