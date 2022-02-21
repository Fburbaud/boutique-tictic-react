import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};
    onFormSubmit = () =>{
        
    }
    render(){
        return (
            <div className="ui fluid category search">
                <form className="ui form">
                    <div className="ui icon input">
                        <input 
                            type="text" 
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={event => this.setState({ term: event.target.value })}
                        />
                        <i className="circular search link icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;