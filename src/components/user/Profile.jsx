import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import ShowOrderProduct from '../ShowOrderProduct';

const Profile = () => {
    const { user, userOrder } = useContext(AppContext);
  return (
    <>
      <div className="container text-center my-3">
        <h1>Welcome , {user?.name}</h1>
        <h5>{user?.email}</h5>
        <h3>Total Order: {userOrder?.length}</h3>
      </div>

      <div className="container my-5 !overflow-x-scroll">
        <table className="table table-bordered border-gray-600 bg-white text-black">
          <thead className="bg-white text-black">
            <tr>
              <th scope="col" className="bg-white text-black text-light text-center">
                OrderItems
              </th>

              <th scope="col" className="bg-white text-black text-light text-center">
                OrderDetails & ShippingAddress
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {userOrder && (
              <>
                {userOrder?.map((product) => (
                  <tr key={product._id}>
                    <td className="bg-white text-black text-light">
                      <ShowOrderProduct items={product?.orderItems} />
                    </td>
                    <td className="bg-white text-black text-light">
                      <ul style={{ fontWeight: "bold" }}>
                        <li>OrderId : {product?.orderId}</li>
                        <li>PaymentId : {product?.paymentId}</li>
                        <li>PaymentStatus : {product?.payStatus}</li>
                        <li>Name : {product?.userShipping?.fullName}</li>
                        <li>Phone : {product?.userShipping?.phoneNumber}</li>
                        <li>Country : {product?.userShipping?.country}</li>
                        <li>State : {product?.userShipping?.state}</li>
                        <li>PinCode : {product?.userShipping?.pincode}</li>
                        <li>Near By : {product?.userShipping?.address}</li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Profile