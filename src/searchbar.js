import React from 'react';
import './style.css'


class Searchbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputchange = event => {
        this.setState({ term: event.target.value });
    };

    onformsubmit = event => {
        event.preventDefault();

        this.props.onsearchvideo(this.state.term);

    }


    render() {

        return (
            <div style={{ padding: 10 }}>
                <form className="ui form" onSubmit={this.onformsubmit}>
                    <div className="field">
                        <input type="text" value={this.state.term}
                            onChange={this.onInputchange}
                            placeholder="search here"
                            className="ui focus input"
                        />
                    </div>
                </form>
            </div>);
    };






}


export default Searchbar;