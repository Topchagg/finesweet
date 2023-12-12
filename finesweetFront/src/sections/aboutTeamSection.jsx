import { useState } from 'react'
import Inputitem from '../components/inputItem'
import EmployeeBlock from '../components/employeeBlock'
import OrangeBtn from '../components/orangeButton'
import InputFileItem from '../components/inputFileItem'
import Slider from 'react-slick';
import ToRightArrow from '../components/toRightArrow'
import ToLeftArrow from '../components/toLeftArrow'


import { validate } from '../validation'
import { useCreateEmployeeBlockMutation, useGetAllEmployeeBlockQuery} from '../redux/fineSweetApi'
import { downloadImgTo } from '../firebase/firebaseScripts'

import '../styles/aboutOurTeam.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AboutTeamSection () {

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        prevArrow: <ToLeftArrow/>,
        nextArrow: <ToRightArrow/>
      };


    const [isCreating, setIsCreating] = useState(false)
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [nameIsValid, setNameIsValid] = useState(true)
    const [position, setPosition] = useState('')
    const [positionIsValid, setPositionIsValid] = useState(true)

    const [createEmployeeBlock, result] = useCreateEmployeeBlockMutation()

    async function handleCreateEmployeeBlock (name, position, image) {
        if(nameIsValid, positionIsValid) {
            const urlImg = await downloadImgTo(image, "employee-images/" )
            const data = {
                name: name,
                position: position,
                image: urlImg
            }
            await createEmployeeBlock(data)
            window.location.reload();
        }
    }
 
    function handleName(e) {
        const result = validate(e.target.value, setNameIsValid , "50")
        if(result) {
            setName(e.target.value)
        }
    }

    function handlePosition(e) {
        const result = validate(e.target.value,setPositionIsValid,"50")
        if(result){
            setPosition(e.target.value)
        }
    }

    function handleImg(e) {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const {data = [], isLoading } = useGetAllEmployeeBlockQuery();
    return (
        <div className="about-team-section">
            {isCreating || <> 
            <div className="about-team-title-wrapper header-one">
                Meet our team
            </div>
            <div className="btn-wrapper" onClick={() => (setIsCreating(!isCreating))} ><OrangeBtn text={'Create new'}/></div>
                <div className="items-wrapper">
                    <Slider {...settings}>
                    {data.map((employee) => (
                        <EmployeeBlock key={employee.pk}  pk={employee.pk} name={employee.name} position={employee.position} img={employee.image} />
                    ))}
                    </Slider>
                </div>
            </>}
            {isCreating && <>
                <div className="is-creating-employee-block-wrapper">
                    <div className="buttons-wrapper">
                        <div className="btn-wrapper" onClick={() => (setIsCreating(!isCreating))} ><OrangeBtn text={'Decline'}/></div>
                        <div className="btn-wrapper" onClick={() => (handleCreateEmployeeBlock(name, position, image))}><OrangeBtn text={'Create'}/></div>
                    </div>
                    <form action="" className="form-wrapper">
                        <Inputitem setFunc={handleName} defaultValue={name} type={'text'} placeholder={'Name'} />
                        <Inputitem setFunc={handlePosition} defaultValue={position} type={'text'} placeholder={'Position'} />
                        <div className="input-file-item-wrapper"><InputFileItem text={"Upload img of employee"} id={"upload-img-employee"} handleImg={handleImg} /></div>
                    </form>
                </div>
            </>}
        </div>
    )
}

export default  AboutTeamSection