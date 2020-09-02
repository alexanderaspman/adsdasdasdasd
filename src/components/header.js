import React from 'react'



class TopInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        const myFunction = () =>{
            
            
                          
                
            function checkForVisibility() {
                var headers = document.querySelectorAll(".delay-left");
                headers.forEach(function(header) {
            
                    
                  if (isElementInViewport(header)) {
                   return header.classList.add("delay--enter");
                    
                }
                   
                });
              }
              
              function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
              
                return (
                  rect.top >= 0 &&
                  rect.left >= 0 &&
                  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                  rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
                );
              }
              
              if (window.addEventListener) {
                window.self.addEventListener('DOMContentLoaded', checkForVisibility, false); 
                window.self.addEventListener('load', checkForVisibility, false);
                window.self.addEventListener('scroll', checkForVisibility, false);
              }
              
            }
        return (  <header className="masthead" id='top' trigger={myFunction()}>
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-10  delay-left">
<<<<<<< HEAD
                <h1 className="text-uppercase text-white-30 font-weight-bold delay-left">ALexander Aspman<br />  Frontend programmer</h1>
        <h3 className="text-white-50 mb-8"> dabbles in both backend and web design</h3>
=======
                <h1 className="text-uppercase -white-30 font-weight-bold delay-left">ALexander Aspman<br />  Frontend programmer</h1>
        <h3> who dabbles a lot in both backend and web design</h3>
>>>>>>> c25b591e262fc7ec29d2b98b3010157afbd11da4


                    <hr className="divider my-4" />
                </div>
                <div className="col-lg-8 baseline">
                </div>
            </div>
        </div>
    </header> );
    }
}
 
export default TopInformation;
