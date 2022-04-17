import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ornaments }) => {
    return (
        <div>
            <h5>Me</h5>
            <p><small>House: {house}</small></p>
            <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default Myself;