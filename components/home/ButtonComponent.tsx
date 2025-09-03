import React from 'react';

function ButtonComponent(props) {
    return (
    <button onClick={props.Click} className="px-4 py-2 text-white rounded-2xl border-2 font-bold border-white-900 cursor-pointer hover:bg-blue-400">
        {props.text}
    </button>
    );
}

export default ButtonComponent;
