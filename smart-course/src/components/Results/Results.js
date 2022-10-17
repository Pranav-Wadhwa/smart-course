import React from "react"
import "./Results.css"

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.results === undefined) return (<div></div>);
        let answerBox = <div></div>
        if (typeof this.props.results.answer !== 'undefined') {
            answerBox = (
                <div className="Result">
                    <div className="Result-header">
                        <div className="Result-key">Best Match</div>
                        <h3 className="Result-title">{this.props.results.answer.id}: {this.props.results.answer.title}</h3>
                    </div>
                    <p className="Result-description">
                        {this.props.results.answer.description}
                    </p>
                </div>
            )
        }
        const resultsList = this.props.results.courses.map((course) => {
            return (
                <div className="Result" key={course.id}>
                    <div className="Result-header">
                        <h3 className="Result-title">{course.id}: {course.title}</h3>
                    </div>
                    <p className="Result-description">
                        {course.description}
                    </p>
                </div>
            )
        });
        return (
            <div className="Results-container">
                {answerBox}
                {resultsList}
            </div>
        )
    }
}

export default Results