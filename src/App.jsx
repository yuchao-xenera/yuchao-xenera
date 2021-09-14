import React, { Component } from 'react'
import MyHeader from './components/Header'
import MyContent from './components/Content'

export default class App extends Component {
    render() {
        return (
            <div>
                <MyHeader/>
                <MyContent/>
            </div>
        )
    }
}
