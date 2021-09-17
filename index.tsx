import React from 'react';

import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';

import classes from './styles.module.css';

export default class BaseLayout extends React.Component {

    render() {
        return (
            <div className={`${classes.page_wrapper}`}>
                <Header />
                <div className={`${classes.container}`}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}