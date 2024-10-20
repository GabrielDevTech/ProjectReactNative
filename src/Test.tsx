import { useCallback, useState } from "react";
import React from 'react';

const Test = () => {
    const [name, setName] = useState('julio');
    const handleChangedName = useCallback(() => {
        setName('José')
    }, []);
    return <div onClick={handleChangedName}>{name}</div>
}

export default Test;
