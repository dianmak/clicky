import React from "react";
import Image from "./Image";

class ImageContainer extends React.Component {
    state = {
        images: [
            { img: require("./images/bmo.png"), id: 100 },
            { img: require("./images/bubblegum.png"), id: 200 },
            { img: require("./images/finn.png"), id: 300 },
            { img: require("./images/gingerbread.png"), id: 400 },
            { img: require("./images/iceking.png"), id: 500 },
            { img: require("./images/jake.png"), id: 600 },
            { img: require("./images/lemongrab.png"), id: 700 },
            { img: require("./images/lich.png"), id: 800 },
            { img: require("./images/lsp.png"), id: 900 },
            { img: require("./images/marceline.png"), id: 1000 },
            { img: require("./images/rainicorn.png"), id: 1100 },
            { img: require("./images/treetrunks.png"), id: 1200 }
        ],
        clicked: []
    };

    // mapImage = (element, key) => {
    //     // console.log(tempimages);
    //     let todisplay = require(element);
    //     return (

    //         <Image key={key} src={todisplay} />
    //     );
    // }
    // From https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    shuffle = (imagearray) => {
        let j, x, i;
        for (i = imagearray.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = imagearray[i];
            imagearray[i] = imagearray[j];
            imagearray[j] = x;
        }
        return imagearray;
    }

    handleClick = (value) => {
        console.log(value + " was clicked");
        if (this.state.clicked.includes(value)) {
            this.setState({ clicked: [] });
            this.props.newGame();
        }
        else {
            this.state.clicked.push(value);
            console.log("Pushed " + value);
            console.log("new array " + this.state.clicked);
            this.props.changeScoreinApp();
        }
        this.setState({ images: this.shuffle(this.state.images) })
    }

    render() {
        return (
            <div className="container">
                {this.state.images.map((image) => {
                    return (
                        <Image src={image.img} value={image.id} handleClick={this.handleClick} />
                    )
                })}

            </div>

        );
    }
}


export default ImageContainer;