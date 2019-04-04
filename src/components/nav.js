import React from "react";



class Nav extends React.Component {

    state = {
        count: 0
    };

    handleCount = () => {
        this.setState({count:this.state.count + 1})
    };

    highcScore = {
    }

    render (){
        return (
        <div className="contanier">
        <div className="row">
            <nav className="navbar navbar-light bg-light fixed-top">
                <h2>Clicky Game</h2>
                <h2>Click an image to begin!</h2>
                <h2 className="score">Score: {this.state.count} | Top Score: 0</h2>
            </nav>
        </div>
        </div>
        )
    }
}

export default Nav;