import React from 'react';
import $ from 'jquery';
 
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        showMe:false,
     };
      
      }
    
    
    
      operation(){
    
        this.setState({
          showMe:! this.state.showMe
      
        });
        
      }

  render() { 
    
  
    
  

    return (<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#top">På Toppen</a>
      <button className="navbar-toggler navbar-toggler-right"  type="button" data-toggle="collapse" onClick={() =>  this.operation()} data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span  className="navbar-toggler-icon"></span>
      </button>
      {
           this.state.showMe?

           <div class="navbar-collapse" id="navbarResponsive">
           <ul class="navbar-nav ml-auto my-2 my-lg-0">
             <li class="nav-item">
               <a class="nav-link js-scroll-trigger" href="#about">About</a>
             </li>
             <li class="nav-item">
               <a class="nav-link js-scroll-trigger" href="#services">
                   Job specialties</a>
             </li>
             <li class="nav-item">
               <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
             </li>
             <li class="nav-item">
               <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
             </li>
           </ul>
         </div>
           :null}

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto my-2 my-lg-0">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">
                Job specialties</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    
    
    </nav>  );
  }
}
 
export default Nav