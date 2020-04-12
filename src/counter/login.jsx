import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom'
import {History} from 'history'
import Todolist from './todolist'
import HeaderComponent,{FooterComponent} from './HeaderFooter'



class TodoList extends Component {
    render()
    {
        return(
            <div className="todolist">
      <Router>
        <>
       < HeaderComponent/>
      <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path ="/welcome" component= {LearningCounterpart}></Route>
      <Route path ="/todolist"component ={Todolist}></Route>
      <Route component={ErrorComponent}></Route>
      </Switch>
      <FooterComponent/>
        </>
    </Router>
                
    </div>

        );
    }
    
}



class Login extends Component{
 
    constructor(props){
        super(props)
        this.state ={
            Name:'username',
            Password:'',
            hasLoginfailed: false,
            showSucessMessage:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.onclickHandle= this.onclickHandle.bind(this)
       
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })

    }
    onclickHandle(){
        if(this.state.Name==='admin' && this.state.Password==='admin' ){
            this.props.history.push("/welcome")
            this.setState({
                showSucessMessage:true,
                 hasLoginfailed:false
            })
        } else
        
        this.setState({
            hasLoginfailed:true,
            showSucessMessage:false
        })

        
        
    }

   
    render(){
    return(
        <div className="login">
            {this.state.showSucessMessage && <div> Login Success</div>}
            {this.state.hasLoginfailed && <div>Login failed</div>}
            Name: <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange}>
            </input>
            Password: <input type="password" name="Password" value={this.state.Password} onChange={this.handleChange}></input>
            <button onClick={this.onclickHandle}>Login</button>
            
           
        </div>
    );
     
}
}

function LearningCounterpart(){
    return (
      <div className="learningcounterpart">
       My First Project on React <Link to = "/todolist">clickhere to todolist</Link>
       
      </div>
    );
  
  }

  function ErrorComponent(){
    return<div> An error occured</div>
  }

export default TodoList;