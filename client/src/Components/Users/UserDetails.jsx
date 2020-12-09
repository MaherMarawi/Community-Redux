import React from 'react'

function UserDetails({ value, user }) {
    console.log(value)
    return (
        <div className='oneUser' >
            <div className="btnUS">
                <h3 style={{ color: user?.id !== value._id ? "black" : "red" }}><b style={{ color: "#E76F51" }} >Email:  </b>{value.email}</h3>
                {value.phoneNumber && value.phoneNumber ?
                    <h3><b style={{ color: "#E76F51" }} >phone number:  </b>{value.phoneNumber}</h3> : ''}
                <h3>username: {value.username}</h3>
                {value.langs && value.langs ?
                    <h3><b style={{ color: "#E76F51" }} >description :  </b>{value.langs}</h3> : ''}
                {value.accounts && value.accounts.map(account => <h3>Account: <a href={account && account} target='_BLANK' >{account && account}</a></h3>)}
            </div>
        </div >
    )
}

export default UserDetails
