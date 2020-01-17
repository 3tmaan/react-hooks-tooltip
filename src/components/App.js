// Externals
import React from 'react';
// Internals
import Tooltip from './Tooltip/Tooltip';

function App () {
    return (
        <section>
            <h1>Tooltips using React Hooks</h1>
            <Tooltip title="Tooltip on top" position="top">
                <button>Tooltip on top</button>
            </Tooltip>
            <Tooltip title="Tooltip on bottom" position="bottom">
                <button>Tooltip on Bottom</button>
            </Tooltip>
            <Tooltip title="Tooltip on left" position="left">
                <button>Tooltip on left</button>
            </Tooltip>
            <Tooltip title="Tooltip on right" position="right">
                <button>Tooltip on right</button>
            </Tooltip>
        </section>
    );
}

export default App;
