import ServiceItem from "../components/serviceItem"
import CreateServiceItem from "../components/createServiceItem"

function SingleServicePage() {
    return (
        <div className="section">
            <div className="content__container">
                {/* <ServiceItem/> */}
                <CreateServiceItem/>
            </div>
        </div>
    )
}

export default SingleServicePage