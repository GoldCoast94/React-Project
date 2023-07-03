import React, { Component, Fragment } from 'react';
import { GlobalStyle, ResetStyle} from './style';
import { IconFont } from './static/iconfont/iconfont';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component{
	render() {
		return (
			<Fragment>
				<Provider store={store}>
					<ResetStyle />
					<GlobalStyle />
					<IconFont />
					<Router>
						<Header />
						<Route path='/' exact component={Home}></Route>
						<Route path='/detail/:id' exact component={Detail}></Route>
						<Route path='/login' exact component={Login}></Route>
						<Route path='/write' exact component={Write}></Route>
					</Router>
				</Provider>
			</Fragment>
		)
	}
};

export default App;