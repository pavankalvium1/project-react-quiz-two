import React from "react";
import "../App.css";
import quizData from "./quizQuestion.json";

class QuizComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: quizData,
    };
  }

  previous = () => {
    this.setState((prevState) => ({
      x: Math.max(prevState.x - 1, 0),
    }));
  };

  next = () => {
    const { x, y } = this.state;
    if (x === y.length - 1) {
      this.setState({ x: 0 });
    } else {
      this.setState((prevState) => ({
        x: prevState.x + 1,
      }));
    }
  };

  quit = () => {
    const confirmQuit = window.confirm(
      "Are you sure you want to quit the game?"
    );

    if (confirmQuit) {
      alert("You quit the game");
      // Redirect to the first question upon quitting
      this.setState({ x: 0 });
    }
  };

  render() {
    const { x, y } = this.state;
    const finalQ = x === y.length - 1;
    let text;
    if (finalQ) {
      text = "Reset";
    } else {
      text = "Next";
    }
    const presQ = y[x];

    return (
      <div id="rect">
        <div id="ques">
          <h1>Question</h1>

          <p className="question">{`Question ${x + 1} of ${
            y.length
          }`}</p>
          <p className="text">{presQ.question}</p>

          <div id="choice">
            <div id="opt1">{presQ.optionA}</div>
            <div id="opt2">{presQ.optionB}</div>
            <div id="opt3">{presQ.optionC}</div>
            <div id="opt4">{presQ.optionD}</div>
          </div>
          <div>
            <button id="previous" onClick={this.previous}>
              Previous
            </button>
            <button id="next" onClick={this.next}>
              {text}
            </button>
            <button id="quit" onClick={this.quit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;