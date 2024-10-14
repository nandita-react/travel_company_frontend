import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Bookings = () => {
    const [showData,setShowData]=useState([])
    async function fetchData(){
        try{
            const loggedUser = JSON.parse(localStorage.getItem('traveluser'))

            const { token } = loggedUser
        
            const headers = {
                'Authorization': `Bearer ${token}`,
        
            }

            const response=await axios.get('http://localhost:5000/api/customer/my-bookings',{headers})
            console.log(response)
            if(response.status===200){
              setShowData(response.data.bookings)
            }
        }
        catch(error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                            <table className="table mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col">BookingId</th>
                                        <th scope="col">PackageName</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        showData ?showData.map((item,index)=>(
                                            <tr>
                                            <th scope="row">{item. bookingRef}</th>
                                            <td>{item.tour.name}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                        )):null
                                    }
                                    
                                    {/* // <tr>
                                    //     <th scope="row">2</th>
                                    //     <td>Jacob</td>
                                    //     <td>Thornton</td>
                                    //     <td>@fat</td>
                                    // </tr>
                                    // <tr>
                                    //     <th scope="row">3</th>
                                    //     <td colSpan={2}>Larry the Bird</td>
                                    //     <td>@twitter</td>
                                    // </tr> */}
                                </tbody>
                            </table>

                        </div>
  )
}

export default Bookings