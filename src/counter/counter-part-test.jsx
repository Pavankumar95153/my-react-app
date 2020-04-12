import React, { Component } from "react"
import './counter.css'

class CounterPartTest extends Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.testAnalysis= this.testAnalysis.bind(this);
    }

    render(){
        return(
            <div className="counterPart">
                <button onClick={this.testAnalysis}>+2</button>
                <span className='count'>{this.state.counter}</span>
            </div>
        )
    }
    testAnalysis(){
        this.setState({
            counter: this.state.counter+2
        })
    }
}
export default CounterPartTest