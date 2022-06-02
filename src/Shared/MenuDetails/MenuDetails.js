import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useMenus from '../Hooks/useMenus';
import Loading from '../Loading/Loading';

const MenuDetails = () => {
    const navigate = useNavigate()
    const { menuId } = useParams();
    const [menus] = useMenus();

    const searchId = +menuId;

    const menu = menus.find(menu => menu.id === searchId);
    console.log(menu);

    const handleCheckout = () => {
        navigate('/checkout')
    }

    if (menus.length === 0) {
        return <Loading />
    }

    return (
        <>
            <div className='h-[100vh] flex justify-center'>

                <div>
                    <div className='text-center w-[500px] border-1 rounded-lg p-5 shadow-lg hover:shadow-2xl'>
                        <img className='mx-auto w-[200px]' src={menu?.img} alt="" />
                        <div className='text-left'>
                            <p className='text-3xl font-bold text-yellow-500'>{menu?.name}</p>
                            <p>Price: {menu?.price}/-Tk</p>
                            <p>Rating: {menu?.rating}</p>
                            <p>Details: {menu?.description}</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button onClick={handleCheckout} className='bg-yellow-400 w-[200px] px-5 py-2 rounded-full font-medium hover:shadow-md mt-3'>Checkout Now</button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default MenuDetails;