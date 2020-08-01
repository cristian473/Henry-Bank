import React from 'react'
import './General.css'
import { Link } from 'wouter'


export default function General() {
    return (
        <div className = 'container' >
            <div className = 'general' >
                <h4> GENERAL </h4>
            </div>
            <div className = 'props' >
                <div className = 'income'>
                    <h5> Income </h5>
                    <h3 className = 'value' > $2,334.12 </h3>
                </div>
                <div className = 'expenses' >
                    <h5> Expenses </h5>
                    <h3 className = 'value' > $1,153.15 </h3>
                </div>
            </div>
            <div className = 'record' >
                <Link to = '1day' className = 'link' > 1Day </Link>
                <Link to = '7days'  className = 'link' > 7Days </Link>
                <Link to = '30days' className = 'link' > 30Days </Link>
                <Link to = '6months'  className = 'link' > 6Months </Link>
            </div>
        </div>
    )
}