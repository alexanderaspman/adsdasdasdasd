import React , {Component} from 'react'
class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
        return ( <section class="page-section bg-primary" id="about" trigger={myFunction()}>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2  class="text-white mt-0 delay" style={{color:'white'}}>I have thurst for coding which never will be filled, and I always like to learn the newer intersting frameworks becaouse I believe its helfy <br /> NOT to feel like your brilliant all the time</h2>
                    <hr class="divider light my-4" />
    
                    <p class="text-white-50 mb-4">I have gone to art-school for a year befor studying frontend on Nackademin in Stockholm and why i didnt focus on further studies inte coding after the Gymnaisum, was becouse back then it wasnt ass big. And I thought this is to fun who would ever oay me for this.</p>
                    <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get informed about my job specification !</a>
                </div>
            </div>
        </div>
    </section> );
    }
}
 
export default Info


