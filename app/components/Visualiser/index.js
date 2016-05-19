
// NOTE: adapted from Joel Auterson's phenomenal project, kajero ( https://github.com/JoelOtter/kajero/blob/master/src/js/components/visualiser/Visualiser.js )

// IDEA: let components dispatch an action onHover so we can highlight where variables were defined in code

/*
 * Root class with utility functions
 */

import React, { Component } from 'react';
import DefaultVisualiser from './DefaultVisualiser';
import ObjectVisualiser from './ObjectVisualiser';
import ArrayVisualiser from './ArrayVisualiser';

import styles from './styles.css';

const SPACING = 2;

export function typeString (item) {
    var typeString = Object.prototype.toString.call(item);
    return typeString.split(' ')[1].split(']')[0];
}

export function selectComponent (data) {
    switch (typeString(data)) {
        case 'Object':
            return ObjectVisualiser;
        case 'Array':
            return ArrayVisualiser;
        default:
            return DefaultVisualiser;
    }

}

export function getSpacing (indent) {
    if (indent < 1) return '';
    let spaces = indent * SPACING;
    var result = '';
    for (let i = 0; i < spaces; i++) {
        result += '\u00a0';
    }
    return result;
}

export default class Visualiser extends Component {

    render() {
        const { data, useHljs, click, path, name } = this.props;
        const VisualiserComponent = selectComponent(data);
        return (
            <div className={styles.visualiser}>
                <VisualiserComponent
                    data={data}
                    indent={0}
                    useHljs={useHljs}
                    click={click}
                    name={name}
                    path={path}
                />
            </div>
        );
    }

}
