import React from "react";

class Score extends React.Component {

    render() {
        return (
            <h2 className="display-3">{this.props.scorevalue}</h2>
        );
    }
}

export default Score;