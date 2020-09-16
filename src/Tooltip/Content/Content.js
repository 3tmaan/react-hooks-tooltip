// Externals
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// Styling
import Styles from './Content.css';

const propTypes = {
    placement: PropTypes.string,
    onDisplay: PropTypes.func,
    onDismiss: PropTypes.func,
    children: PropTypes.node.isRequired,
};

const Content = ({ placement, onDisplay, onDismiss, children, ...otherProps }) => {
    useEffect(() => {
        // called when mounted
        onDisplay && onDisplay();
        // called when unmounted
        return () => {
            onDismiss && onDismiss();
        };
    }, []);

    return (
        <div
            role="tooltip"
            data-testid="tooltip-content"
            {...otherProps}
            className={classnames(Styles.container, Styles[placement])}
        >
            <span className={Styles.arrow}></span>
            {children}
        </div>
    );
}

Content.defaultProps = {
    placement: 'bottom',
};

Content.propTypes = propTypes;
Content.displayName = 'Content';

export default Content;
