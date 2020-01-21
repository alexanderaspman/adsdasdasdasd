import React , {Component} from 'react';
import Skillz from './Skillz'
class Info extends Component {
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
    
    



    render() {  const myFunction= ()=>{
            
            
                          
                
        function checkForVisibility() {
            var headers = document.querySelectorAll(".delay");
            headers.forEach(function(header) {
        
                
              if (isElementInViewport(header)) {
               return header.classList.add("delay-show");
                
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

        return ( <section className="page-section bg-primary" id="about" trigger={myFunction()}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2  className="text-white mt-0 delay" style={{color:'white'}}>I have thirst for coding which never will be filled, and I always like to learn the newer interesting frameworks because I believe it's healthy <br /> NOT to feel like your brilliant all the time</h2>
                    <hr className="divider light my-4" />
    
                    <p className="text-white-50 mb-4">I have gone to art-school for a year befor studying frontend on Nackademin in Stockholm and why i didnt focus on further studies inte coding after the Gymnaisum, was becouse back then it wasnt ass big. And I thought this is to fun and who would ever pay me for this.</p>
                    <a className="btn btn-light btn-xl js-scroll-trigger" onClick={() =>  this.operation() } href="#services">Get informed about my job specification !</a>
                </div>
            </div>
        </div>
        {
           this.state.showMe?
        
    <Skillz/>
       
       
       :null
}
    </section> 
           
               );
    }
};
 
export default Info


