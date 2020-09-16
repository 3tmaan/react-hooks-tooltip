// Externals
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// Styling
import Styles from './Tooltip.css';

const propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

const Tooltip = ({ id, children }) => {
    const node = useRef();
    const [isHovered, setState] = useState(false);

    let trigger = null;
    let content = null;

    React.Children.forEach(children, child => {
        if (!child.type) {
            return;
        }

        if (child.type.displayName === 'Trigger') {
            trigger = React.cloneElement(
                child,
                {
                    'aria-describedby': id,
                    'data-testid': 'tooltip-button',
                }
            );
        }

        if (child.type.displayName === 'Content') {
            content = React.cloneElement(
                child, { id }
            );
        }
    });

    return (
        <div className={Styles.container}
            data-testid="tooltip"
            ref={node}
            onMouseEnter={() => setState(true)}
            onMouseLeave={() => setState(false)}
        >
            {trigger}
            {isHovered && content}
        </div>
    );
};

Tooltip.propTypes = propTypes;

export default Tooltip;
