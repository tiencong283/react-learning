import React from "react"
import "./BusinessList.css"
import Business from "../Business/Business"

class BusinessList extends React.Component {
    render() {
        if (!this.props.businesses) {
            return <div className="BusinessList"></div>
        }
        console.log(this.props.businesses)
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(function (business) {
                        return <Business business={business} key={business} />
                    })
                }
            </div>
        )
    }
}

export default BusinessList