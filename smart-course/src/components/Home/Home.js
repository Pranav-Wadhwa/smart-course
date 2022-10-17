import React from "react"
import Search from '../Search/Search';
import Results from '../Results/Results';
import { Oval } from 'react-loader-spinner'
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            hasResults: false,
            results: undefined
        };
        this.fetchCourses = this.fetchCourses.bind(this);
    }

    fetchCourses(query) {
        if (query.length == 0) {
            this.setState((prevState) => ({
                fetching: false,
                hasResults: false,
                results: undefined
            }));
            return;
        }
        this.setState((prevState) => ({
            fetching: true,
            hasResults: true,
            results: undefined
        }));
        fetch(`http://smartcourse.pythonanywhere.com/search?query=${encodeURIComponent(query)}`, { method: 'GET' })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        fetching: false,
                        hasResults: true,
                        results: result
                    });
                }
            )
    }

    render() {
        return (
            <div className="Home-container">
                <Search submitFunction={this.fetchCourses} showExamples={!this.state.hasResults}/>
                <Oval
                    height={80}
                    width={80}
                    color="#fff"
                    wrapperClass="Home-loader"
                    visible={this.state.fetching}
                    ariaLabel='loader'
                    secondaryColor="#aaa"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
                <Results results={this.state.results} />
            </div>
        );
    }
}

export default Home;