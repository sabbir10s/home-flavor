import ReactStars from 'react-rating-stars-component';
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

    const { img, name, price, rating, description } = menu;

    const handleRating = {
        size: 30,
        value: rating,
        edit: false,

    }
    return (
        <>
            <div className='mx-10 my-14 flex justify-center'>

                <div className='grid grid-cols-1 lg:grid-cols-2 p-10 items-center'>
                    <div>
                        <img className='mx-auto w-[400px]' src={img} alt="" />
                    </div>
                    <div className='p-10'>
                        <p className='text-4xl text-black font-mono font-bold'>{name}</p>
                        <div className='flex gap-2 items-center'> <ReactStars  {...handleRating} /> <span className='text-gray-500'>(35)</span></div>

                        <p className='font-bold text-lg'>Price: {price}/-Tk</p>
                        <p className='text-sm text-gray-600'>{description}</p>
                        <button onClick={handleCheckout} className='bg-yellow-400 w-[200px] px-5 py-2 rounded-lg font-medium hover:shadow-md mt-3'>Checkout Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MenuDetails;