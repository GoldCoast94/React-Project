import React, { Component,Fragment } from 'react';
import store from './store';
import { getChangeInput, getAddItem, getDeleteItem, getTodoList } from './store/actionCreators';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
import { Button, Input} from 'antd';
import 'antd/dist/antd.css';

class App extends Component{

	constructor(props) {
		super(props);
		this.state = store.getState();

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		store.subscribe(this.handleStoreChange);
	}

	handleInputChange(e) {
		const value = e.target.value;

		store.dispatch(getChangeInput(value));
	}

	handleStoreChange() {
		this.setState(store.getState());
	}

	handleBtnClick() {
		store.dispatch(getAddItem());
	}

	handleDeleteItem(index){
		store.dispatch(getDeleteItem(index));
	}

	render() {
		return (
			<Fragment>
				<div>
					<Input
					  placeholder='travel around the world'
						style={{width:'400px',marginRight:'10px'}}
						value={this.state.inputValue}
						onChange={this.handleInputChange}
						/>
					<Button type='primary' onClick={this.handleBtnClick}>Submit</Button>
				</div>
				<TransitionGroup>
					{
						this.state.list.map((item, index) => {
							return (
								<CSSTransition
									timeout={1000}
									appear={true}
									classNames='fade'
									key={index}
								>
									<div onClick={this.handleDeleteItem.bind(this, index)}>{index}-{item}</div>
								</CSSTransition>
							)
						})
					}
				</TransitionGroup>
			</Fragment>
		)
	}

	componentDidMount() {
		const action = getTodoList();
		store.dispatch(action);
	}
}

export default App;