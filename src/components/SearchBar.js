import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui fluid category search">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui icon input">
                        <input 
                            type="text" 
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                        <i className="circular search link icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;