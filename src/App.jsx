import {Component} from 'react'
import {Layout } from 'antd';
import Top from './components/Top'
import Container from './components/Container'
import { Provider } from 'react-redux'
import store from './redux/store';
import 'antd/dist/antd.css'
import './APP.css'

export default class App extends Component {
	render() {
		return ( 
			<Provider store={store}>
				<Layout>
					<Top/>
					<Container/>
				</Layout>
			</Provider>
			)
	}
}

