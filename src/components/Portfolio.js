
import React, {Component} from 'react';

import playStore from  '../images/playStore.jpg'
import Vaskaorder from "../images/Vaskaorder1.png"
import perdy from "../images/nannycutprofile.jpg"
import Modal from "./Modal";
import profil from '../images/profilbild.jpg'





const images = [
   '//www.flickr.com/photos/186003211@N03/49215989238/in/dateposted-public/',
    '//www.flickr.com/photos/186003211@N03/49216724242/in/dateposted-public/'

]

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoIndex: 0,
            isOpen: false
          };
    }
    state = {
        showModal: 0
      };
    
      getModal = value => {
        this.setState({ showModal: value });
      };
    
      hideModal = value => {
        this.setState({ showModal: 0 });
      };



    render() {
        const { photoIndex, isOpen } = this.state;

       return( 
        <section id="portfolio" >
        <div className="container-fluid p-0">
            <div className="row no-gutters">
                <div className="col-lg-4 col-sm-6">
                    <a className="portfolio-box" onClick={() => this.setState({ isOpen: true })}>
                        <img className="img-fluid" src={Vaskaorder} alt="" />
                        <div className="portfolio-box-caption">
                            <div className="project-category text-white-50">
                                Frontend:
              </div>
                            <div className="project-name">
                                Online butik
              </div>
                        </div>
                    </a>
                  

                </div>
               {/*  {this.props.data.map((data, key) => (
          <div key={key} className="small">
            <p>Namsse: {data.name}</p>
            <img className="img-fluid" onClick={() => this.getModal(data.id)} src={profil} alt="" />


            <Modal
              show={this.state.showModal === data.id}
              onHide={() => this.hideModal(data.id)}
              name={data.name}
            />
          </div>
        ))} */}
                <div className="col-lg-4 col-sm-6 ">
                    <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                        <img className="img-fluid" src={playStore} alt="" />
                        <div className="portfolio-box-caption">
                            <div className="project-category text-white-50">
                                Frontend/Grafiskdesigner
              </div>
                            <div className="project-name">
                                Spel webbsida
              </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg">
                        <img className="img-fluid" src={perdy} alt="" />
                        <div className="portfolio-box-caption">
                            <div className="project-category text-white-50">
                                Grafiskdesigner
              </div>
                            <div className="project-name">
                            illustrator
              </div>
                        </div>
                    </a>
                </div>
            
                </div>
            </div>
    
    
    
     
    </section>
       
       
       
       
    )


    }


}



    
;
export default Portfolio