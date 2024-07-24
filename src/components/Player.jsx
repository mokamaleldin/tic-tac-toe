import { useState } from 'react';

export default function Player({ initialName, playerSymbol, isActive }) {
    const [editing, setEditing] = useState(false);
    const [playName, setPlayName] = useState(initialName);

    const handleEdit = () => {
        setEditing((editing) => !editing);
    };

    const handleChange = (event) => {
        setPlayName(event.target.value);
    }

    let PlayNameState = <span className="player-name">{ playName }</span>;

    if (editing) {
        PlayNameState = <input type="text" required onChange={ handleChange } value={ playName } />;
    }

    return (
        <li className={ isActive ? 'active' : '' }>
            <span className="player">
                { PlayNameState }
                <span className="player-symbol">{ playerSymbol }</span>
            </span>
            <button onClick={ handleEdit } >{ editing ? "Save" : "Edit" }</button>
        </li>
    )
}