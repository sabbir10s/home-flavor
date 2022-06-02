
import useMenus from '../../../Shared/Hooks/useMenus';
import Loading from '../../../Shared/Loading/Loading';
import MenusCart from '../MenuCart/MenusCart';



const CateringMenu = () => {
    const [menus] = useMenus();
    if (menus.length === 0) {
        return <Loading />
    }
    return (
        <div className='lg:mx-10 mx-4'>
            <h1 className='text-center text-black text-3xl lg:text-4xl mt-20 mb-12 font-bold font-mono'>My Popular Dishes</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 container'>
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