import React, { Component } from 'react';

class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
    }
    render(){
        return (
            <div>
                <input
                    type="text"
                    onChange ={this.onInputChange} />
                {this.state.term}
            </div>
        );
    }

    onInputChange(event){
        this.setState({term:event.target.value});
    }
}

export default SearchComponent;