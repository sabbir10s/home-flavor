
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
            <h2 className='text-center text-lg text-[#77af17] uppercase mt-20 font-bold'>POPULAR MENU</h2>
            <h1 className='text-center text-black text-3xl lg:text-4xl  mb-12 font-bold font-mono'>My Popular Dishes</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10'>
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