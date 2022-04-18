import { useEffect, useState } from 'react';

const useMenus = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {

        fetch('https://api.npoint.io/dde0a50608f7132b09ff')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    return [menus, setMenus];
};

export default useMenus;