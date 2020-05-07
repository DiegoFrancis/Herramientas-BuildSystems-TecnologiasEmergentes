import React from 'react';
import './App.css';

//Componentes
import Login from './components/login/login';
import DashBoard from './components/dashboard/dashboard';

class App extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      show: false
    }
  }

  validarIngreso = () => {
    this.setState({
      show:true
    })
  }

  render(){
    if(this.state.show){
      return <DashBoard/>
    }else{
      return <Login onClick={this.validarIngreso}/>
    }
  }
}

export default App;
