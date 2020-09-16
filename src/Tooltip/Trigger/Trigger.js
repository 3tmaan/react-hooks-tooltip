// Externals
import { createElement } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Trigger = ({ as, children, ...otherProps }) => {
    return (
        createElement(as, {...otherProps}, children)
    );
}

Trigger.defaultProps = {
    as: 'button',
};

Trigger.displayName = 'Trigger';
Trigger.propTypes = propTypes;

export default Trigger;
