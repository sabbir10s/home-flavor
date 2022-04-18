import { useEffect, useState } from 'react';

const useMenus = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/sabbir10s/foodieland/main/public/data.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    return [menus, setMenus];
};

export default useMenus;