import React, { Component } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

class ScrollToTopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 100) {
      // You can adjust this value to control when the button appears
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling, you can remove this if you prefer an instant jump
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div
        className={`scroll-to-top ${isVisible ? "visible" : ""}`}
        onClick={this.scrollToTop}
      >
        <ArrowUpwardIcon /> {/* You can use any icon here */}
      </div>
    );
  }
}

export default ScrollToTopButton;
