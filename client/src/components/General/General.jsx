import React from 'react'
import './General.css'
import { Link } from 'wouter'


export default function General() {
    return (
        <div className = 'container' >
            <div className = 'general' >
                <h4> GENERAL </h4>
            </div>
            <div className = 'income' >
                <h5> <Link to = 'income' > Income </Link> </h5>
                <h3 className = 'value' > $2,334.12 </h3>
            </div>
            <div className = 'expense' >
                <h5>< Link to = 'expenses' >Expenses </Link> </h5>
                <h3 className = 'value' > $1,153.15 </h3>
            </div>
            <div className = 'record' >
                <Link to = '1 day' > 1Day   </Link>
                <Link to = '7 days' > 7Days   </Link>
                <Link to = '30 days' > 30Days   </Link>
                <Link to = '6 months' > 6Months </Link>
            </div>
        </div>
    )
}