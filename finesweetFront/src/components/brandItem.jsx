import { useDeleteServBrandMutation } from '../redux/fineSweetApi'

import { deleteImg } from '../firebase/firebaseScripts';

import '../styles/BrandItem.css'

function BrandItem(props) {

    const [deleteServBrand] = useDeleteServBrandMutation();

    async function handleDeleteServBrand() {
        await deleteImg(props.img)
        await deleteServBrand(props.id);
        window.location.reload();
    }

     return (
        <>
            <div  className="brand-item-wrapper">
                <div onClick={() => {handleDeleteServBrand()}} className="brand-icon-wrapper">
                    <img src={props.img} className='brand-icon' alt="" />
                </div>
                <div className="name-of-brand-wrapper title-two">
                    {props.name}
                </div>
            </div>
        </>
     )
}

export default BrandItem