import React from 'react';

function Child() {
    return (
        <div>
            <h2>child</h2>
        </div>
    );
}


export default function Fathter(props) {
    return (
        <div>
        <h1>father</h1>
            {props.children}
        </div>
    );
}
export {Child};
