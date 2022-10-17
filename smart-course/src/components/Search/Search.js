import React from "react";
import './Search.css';

const exampleQueries = [
    'data structures',
    'low level programming',
    'machine learning'
]

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleExample = this.handleExample.bind(this);
    }

    handleTextChange(event) {
        this.setState({ query: event.target.value });
    }

    handleSubmit(event) {
        this.props.submitFunction(this.state.query);
        event.preventDefault();
    }

    handleExample(event) {
        console.log(event.target);
        this.setState({ query: event.target.id });
        console.log(this.state.query)
        this.props.submitFunction(this.state.query);
    }

    render() {
        let examplesList = <div></div>
        if (this.props.showExamples) {
            let list = exampleQueries.map((query) => {
                return (
                    <button className="Examples-button" key={query} id={query} onClick={this.handleExample}>
                        {query} →
                    </button>
                )
            });
            examplesList = (
                <div className="Examples-container">
                    <h4 className="Examples-title">suggestions</h4>
                    {list}
                </div>
            )
        }
        return (
            <form onSubmit={this.handleSubmit} className="Search-container">
                <label className="Search-label">
                    What would you like to study?
                    <div className="Search-bar">
                        <input autoFocus="autofocus" type="text" value={this.state.query} onChange={this.handleTextChange} className="Search-input" placeholder="Describe what you're interested in..." />
                        <input type="submit" value="→" className="Search-submit" disabled={this.state.query.length == 0} />
                    </div>
                </label>
                {examplesList}
            </form>
        );
    }
}

export default Search;