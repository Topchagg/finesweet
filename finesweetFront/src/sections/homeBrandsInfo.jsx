import { useState } from 'react'
import { motion} from 'framer-motion'
import { useCreateServBrandMutation, useGetAllServBrandQuery } from '../redux/fineSweetApi'

import BrandItem from '../components/brandItem'
import OrangeBtn from '../components/orangeButton'
import Inputitem from '../components/inputItem'
import InputFileItem from '../components/inputFileItem'

import {downloadImgTo} from '../firebase/firebaseScripts'
import { validate, handleDecline } from '../validation'

import '../styles/HomeBrandsInfoSection.css'

function HomeBrandsInfoSection () {

    const [brandIsValid, setBrandIsValid] = useState(true)
    const [brand, setBrand] = useState('')
    const [brandIcon, setBrandIcon] = useState('')
    const [isCreate, setIsCreate] = useState(false)

    const [createServBrand, result] = useCreateServBrandMutation();

    const handleCreateBrand = async(brandIcon, brand) => {
        if(brandIsValid){
            const imgUrl = await downloadImgTo(brandIcon,'brands-icon/')
            const data = {
                icon: imgUrl,
                name: brand
            }
            await createServBrand(data)
            window.location.reload();
        }
    }

    function handleBrandName(e) {
        const result = validate(e.target.value, setBrandIsValid,'10')
        if(result) {
            setBrand(e.target.value)
        }
    }

    function handleImg(e) {
        if(e.target.files[0]){
            setBrandIcon(e.target.files[0])
        }
    }

    const {data = [], isLoading } = useGetAllServBrandQuery();

    return (
        <>
        {isCreate || 
        (
        <motion.div initial={{x: -400, opacity:0}} animate={{x:0, opacity:1}}className="brands-info-section">
            <div className="brands-info-tittle-wrapper header-three">
                Brands we serve
                <div className="brands-btn-wrapper" onClick={() => (setIsCreate(!isCreate))} ><OrangeBtn text={'Add new brand'} /></div>
            </div>
            <div className="brands-wrapper">
            {data.map((servBrand) => (
               <BrandItem key={servBrand.pk} id={servBrand.pk}  name={servBrand.name} img={servBrand.icon} />
            ))} 
            </div>
        </motion.div>
        )
        }
        {isCreate && <div>
            <motion.div initial={{x: 400, opacity:0}} animate={{x:0, opacity:1}} className="brands-create-form-wrapper brands-info-section">
                <div className="brands-form-wrapper">
                    <InputFileItem id={'upload-brand-icon'} text={'Upload brand icon'} handleImg={handleImg} />
                    <Inputitem type={'text'} defaultValue={brand} setFunc={handleBrandName} placeholder={'Name of brand'} />
                    <div className="buttons-wrapper">
                        <div className="btn-wrapper" onClick={() => (setIsCreate(!isCreate))}><OrangeBtn text={'Decline'}/></div>
                        <div className="btn-wrapper" onClick={() => (handleCreateBrand(brandIcon,brand))}><OrangeBtn text={'Create'}/></div>
                    </div>
                </div>
            </motion.div>
        </div>}
        </>
    )
}

export default HomeBrandsInfoSection