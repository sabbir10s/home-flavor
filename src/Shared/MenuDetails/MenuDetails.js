import { useParams } from 'react-router-dom';
import useMenus from '../Hooks/useMenus';

const MenuDetails = () => {

    const [menus] = useMenus([]);

    console.log(menus);
    
    const { menuId } = useParams();

    return (
        <div>
            <h1>Menu Details {menuId}</h1>
        </div>
    );
};

export default MenuDetails;