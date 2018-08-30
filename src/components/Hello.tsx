import * as React from 'react';
import './Hello.css';

export interface Props{
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export interface State{
  currentEnthusiasm: number;
}

export default class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1
    }
  }
  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
  getExclamationMarks(numChars: number): string {
    return Array(numChars + 1).join('!');
  }
  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this.getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}


/*
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({name, enthusiasmLevel=1}:Props){
  if(enthusiasmLevel <= 0){
    throw new Error('You could be a little more enthusiastic. :D')
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  )
}

function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join('!');
}

export default Hello;
*/
/*
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
export default class Hello extends React.Component<Props, object> {
  constructor(props: Props){
    super(props)
    this.getExclamationMarks = this.getExclamationMarks.bind(this);
  }
  getExclamationMarks(numChars: number): string {
    return Array(numChars + 1).join('!');
  }
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this.getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

*/

/*
export interface Props{
  name: string;
  enthusiasmLevel?: number;
}

export interface State{
  currentEnthusiasm: number;
}

export default class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1
    }
  }
  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
  getExclamationMarks(numChars: number): string {
    return Array(numChars + 1).join('!');
  }
  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this.getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}
*/