import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../actions'

interface IProps extends Props<ClassNameHereComponent> {
}

class ClassNameHereComponent extends Component<IProps>{
  constructor(public props: IProps) {
    super(props);
  }
  render () {
    return ();
  }
}
interface IState{}
interface IStateToProps {}

interface IDispatchToProps{}

const mapStateToProps = (state, ownProps:IState): IStateToProps => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps: IProps): IDispatchToProps => bindActionCreators({

},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClassNameHereComponent)