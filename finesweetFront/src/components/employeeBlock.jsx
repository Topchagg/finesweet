
import { useDeleteEmployeeBlockMutation } from '../redux/fineSweetApi'
import OrangeBtn from './orangeButton';
import { deleteImg } from '../firebase/firebaseScripts';

import '../styles/EmployeeBlock.css'

function EmployeeBlock (props) {

    const [destroyEmployeeBlock] = useDeleteEmployeeBlockMutation();

    async function handleDeleteEmployeeBlock(pk, img) {
        await deleteImg(img)
        await destroyEmployeeBlock(pk).unwrap();
        window.location.reload();
    }

    return (
        <div className="employee-block">
            <div className="employee-img-wrapper">
                <img className='employee-img' src={props.img} alt="" />
            </div>
            <div className="employe-info-wrapper">
                <div className="name-employee-wrapper title-two">
                    {props.name}
                </div>
                <div className="employee-position caption">
                    {props.position}
                </div>
                <div className="btn-wrapper" onClick={() => (handleDeleteEmployeeBlock(props.pk, props.img))} ><OrangeBtn text={'Delete'} /></div>
            </div>

        </div>
    )
}

export default EmployeeBlock