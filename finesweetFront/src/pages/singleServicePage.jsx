import ServiceItem from "../components/serviceItem"

import { useParams } from "react-router-dom"
import { useGetOneServiceQuery } from "../redux/fineSweetApi"

function SingleServicePage() {

    const {slug} = useParams();

    const {data = []} = useGetOneServiceQuery(slug);
    

    return (
        <div className="section">
            <div className="content__container">
                <ServiceItem id={data.pk} activeIcon={data.hoverPreviewIcon} icon={data.previewIcon} previewText={data.previewText} quote={data.quotation} name={data.name}  img={data.mainImage} mainTitle={data.mainTitle} mainText={data.mainText} subTitle={data.subTitle} subText={data.subText}/>
            </div>
        </div>
    )
}

export default SingleServicePage