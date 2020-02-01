import React , {Component} from 'react'


import Portfolio from './Portfolio';
class Github extends Component {
  constructor(props) {
    super(props);
    this.state = { post: [
      { id: 1, src: "../images/perdyg.svg" },
      
    ] }
  }
  render() { 
    return ( <section className="page-section bg-dark text-white">
    <Portfolio data={this.state.post} />
  <div className="container text-center">
    <h2 className="mb-4">Free Download of my Codes @ github</h2>
    <a className="btn btn-light btn-xl" href="https://www.github.com/alexanderaspman">Check Out My Github, Now!</a>
  </div>
  </section> );
  }
}
 

export default Github