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
      <Carousel autoplay={false} infinite>
        {this.props.items.map((val) => (
          <img
            key={val.bannerid}
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
