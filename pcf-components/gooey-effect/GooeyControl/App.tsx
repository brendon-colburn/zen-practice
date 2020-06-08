import Goo from "gooey-react";
import React = require("react");


export class App extends React.Component {
  public render() {
    

    return (
        <Goo>
        <svg width="192" height="192">
          <g style={{animation: 'rotate_back 4s linear infinite' }}>
            <circle
              style={{animation: 'rotate 1s linear infinite' }}
              cx="37%"
              cy="37%"
              fill="orchid"
              r="32"
            />
            <circle cx="63%" cy="63%" fill="mediumorchid" r="32" />
          </g>
        </svg>
      </Goo>
    );
  }
}
