import React from "react";
import Option from "./Option";

export default class Choices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: this.props.choices,
      total: this.props.total,
    };
  }

  handleClick(index) {
    const choices = this.state.choices.map((choice, i) => {
      return {
        text: choice.text,
        value: choice.value,
        selected: i === index,
      };
    });

    this.setState({ choices });
  }

  render() {
    const { total, choices } = this.state;
    return (
      <div className="flex w-full flex-col gap-2">
        {choices.map((choice, index) => {
          return (
            <Option
              key={index}
              color={index % 4}
              selected={choice.selected}
              value={choice.value}
              total={total}
              onClick={() => this.handleClick(index)}
            >
              {choice.text}
            </Option>
          );
        })}
      </div>
    );
  }
}
