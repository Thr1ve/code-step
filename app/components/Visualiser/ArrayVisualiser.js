import React, { Component } from 'react';
import { selectComponent, getSpacing } from './index';

import styles from './styles.css';

export default class ArrayVisualiser extends Component {

    constructor(props) {
        super(props);
        this.collapse = this.collapse.bind(this);
        this.state = {open: true};
    }

    collapse() {
        this.setState({open: !this.state.open});
    }

    render() {
        const { data, indent, useHljs, name, path } = this.props;
        let click = this.props.click;
        if (click === undefined) {
            click = () => {};
        }
        let items = [];
        for (let i = 0; this.state.open && i < data.length; i++) {
            var item = data[i];
            var VisualiserComponent = selectComponent(item);
            items.push(
                <VisualiserComponent
                    key={String(i)}
                    data={item}
                    name={String(i)}
                    indent={indent == 0 ? indent + 2 : indent + 1}
                    useHljs={useHljs}
                    click={click}
                    path={path + '[' + i + ']'}
                />
            );
        }

        let arrow;
        let spaces = getSpacing(indent);
        if (data.length > 0) {
            arrow = this.state.open ? '\u25bc' : '\u25b6';
            if (spaces.length >= 2) {
                // Space for arrow
                spaces = spaces.slice(2);
            }
        }
        let key = <span className={styles.visualiserSpacing}>{'\u00a0'}</span>;
        if (name) {
            key = (
                <span className={styles.visualiserSpacing}>
                    {'\u00a0'}
                    <span className={styles.visualiserKey} onClick={() => click(name, path)}>
                        {name}
                    </span>
                    {':\u00a0'}
                </span>
            );
        }

        return (
            <div className="array-visualiser">
                <span className={styles.visualizerRow}>
                    <span className={styles.visualiserSpacing}>{spaces}</span>
                    <span className={styles.visualizerArrow} onClick={this.collapse}>{arrow}</span>
                    {key}
                    <span className={useHljs ? "hljs-keyword" : ""}>Array</span>
                    <span>{'[' + data.length + ']'}</span>
                </span>
                {items}
            </div>
        );

    }

}
