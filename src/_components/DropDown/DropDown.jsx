import React, { useState } from 'react';

import './Dropdown.css';
import downArrow from '../../_assets/images/flèche.png';

function Dropdown(props) {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    function handleChange(e) {
        setOpen(!open);
        setText(e.target.innerHTML);
        const params = {
            text: e.target.innerHTML,
            fieldId: props.fieldId
        }
        props.onHandleChange(params);
    }
    function openDropdown(e) {
        setOpen(!open);
    }
    return(
        <div className="dropdown-group flex relative sm:ml-0 md:ml-2 mt-2 md:mt-0">
            {
                open ? (
                    <div className="absolute bg-white z-10 w-max rounded-lg border p-2 max-h-28 overflow-y-scroll ">
                        {
                            props.contents.map(content => {
                                return (
                                    <div key={content.id}  onClick={handleChange}>{content.value}</div>
                                )
                            })
                        }
                    </div>
                ) : (
                    text ? (
                        <div>
                            {text}
                        </div>
                    ) : (
                        <div className="dropdown-line w-60"></div>
                    )
                )
            }
            <div className="flex w-4 2xl:w-6 h-5 2xl:h-10 items-center justify-center">
                <img src={downArrow} className="ml-2 w-4" alt="down arrow" onClick={openDropdown} />
            </div>
        </div>
    )
}

export { Dropdown };