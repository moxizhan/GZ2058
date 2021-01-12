import React, { Component } from "react";
import { Carousel } from "antd-mobile";

export default class FindBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ["1", "2", "3"],
      imgHeight: 176,
    };
  }
  
  render() {
    return (
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log("slide to", index)}
      >
        {this.props.items.map((val) => (
          <img
            src={val.image}
            alt=""
            style={{ width: "100%", verticalAlign: "top" }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event("resize"));
              this.setState({ imgHeight: "auto" });
            }}
          />
        ))}
      </Carousel>
    );
  }
}
