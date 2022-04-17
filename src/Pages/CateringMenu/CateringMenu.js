import useMenus from '../../Shared/Hooks/useMenus';
import MenusCart from './MenuCart/MenusCart';


const CateringMenu = () => {
    const [menus] = useMenus();
    console.log(menus);
    return (
        <div className=''>
            <h1 className='text-center text-5xl my-10 font-bold'>My Popular Dishes</h1>

            <div className='grid grid-cols-3 gap-10 container mx-auto'>
                {
                    menus.map(menu => <MenusCart menu={menu} key={menu.id}></MenusCart>)
                }
            </div>

            <div>

            </div>
        </div>
    );
};

export default CateringMenu;