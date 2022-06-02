import { useEffect, useState } from 'react';

const useMenus = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/sabbir10s/server/main/foodmenus.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    return [menus, setMenus];
};

export default useMenus;