import React from 'react';
import LoadHoc from '../HOC/LoadHoc';

const Person = (props) => {
    const { name } = props;
    return (
        <li>
            {name}
        </li>
    );
};

export default LoadHoc({ color: 'red', name: 'decorator' })(Person);