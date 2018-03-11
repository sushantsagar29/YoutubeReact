import React from 'react';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {term : ''};
    }

    render(){
        return (
            <div className="search-bar">
                <input
                    className="form-control"
                    value={this.state.term}
                    placeholder="Search here.."
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term: term});
        this.props.onInputChange(term);
    }
}

export default SearchBar;