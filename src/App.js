import React, { Component } from 'react';
import Info from './components/Info'
import Header from './components/header';
import Skillz  from "./components/Skillz";
import Github from './components/github';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css';
import './scss/style.scss';



    // Smooth scrolling using jQuery easing






class App extends Component{
constructor(){
super()
  this.state={
    showMe:true,
    post: [
      { id: 1, src: "./images/perdyg.svg" },
      
    ] }
  
  }
operation(){

  this.setState({
    showMe:! this.state.showMe

  })
  
}

render() {
  const { search } = this.state;

  return (
    <div className="App">
    
         {
           this.state.showMe?
		<Nav>  <button className="nav-btn" onClick={() => this.operation()}>
		</button>  </Nav>         
		  :null
        } 
        
          <Header> 
         
        </Header>
          <Info/> 
         <Skillz/>

		 <Github data={this.state.post}/>

		 <ContactInfo />
          <Footer/>
       
    </div>
  )
}

}
export default App;
