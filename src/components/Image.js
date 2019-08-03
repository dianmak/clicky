import React from "react";

class Image extends React.Component {

    handleClick = () => {
        this.props.handleClick(this.props.value);
    }

    render() {
        return (
            <img
                src={this.props.src}
                className="img-thumbnail"
                onClick={this.handleClick}
                alt=""
                value={this.props.value}
                key=""
            />
        );
    }
}

export default Image;