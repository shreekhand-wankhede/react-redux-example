
import React from "react"
import { UserStore } from "../../Store/UserStore"
import { decrement, increment, login, logout } from "../../Store/actions/UserActions";

export default class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state={counter:0}
    }

    componentDidMount(){
        this.updateCounter();
        UserStore.subscribe(this.updateCounter.bind(this));
      
        
    }

    updateCounter(){
        const state = UserStore.getState();
        this.setState({
            counter: state.counter
        });
        // console.log(state);
    }

    onIncrement () {
        // const state = userStore.getState();
        // console.log("Current Token Value is =>"+state.counter);
        UserStore.dispatch(increment());
    };
    onDecrement () {
        UserStore.dispatch(decrement());
    };

    onLogin () {

        console.log("Current Token Value is =>"+ UserStore.getState().accessToken);

        UserStore.dispatch(login());
    };

    onLogout () {
        UserStore.dispatch(logout());
    };


    render() {
        return( <div>
            <div>Counter Component</div>
            <div>{this.state.counter}</div>
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                <button onClick={this.onLogin}>Login</button>
                <button onClick={this.onLogout}>Logout</button>
            </div>
        </div>);
    }
}