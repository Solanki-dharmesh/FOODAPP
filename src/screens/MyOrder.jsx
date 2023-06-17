// import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// export default function MyOrder() {
//   const [orderData, setorderData] = useState({});

//   const fetchMyOrder = async () => {
//     console.log(localStorage.getItem("userEmail"));
//     await fetch("http://localhost:5000/api/myOrderData", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: localStorage.getItem("userEmail"),
//       }),
//     }).then(async (res) => {
//       let response = await res.json();
//       console.log(response);
//       await setorderData(response);
   
//     });

//     // await res.map((data)=>{
//     //    console.log(data)
//     // })
//   };

//   useEffect(() => {
//     fetchMyOrder();
//     console.log(typeof orderData);
//   }, []);

//   // useEffect(() => {
//   //   console.log(orderData);
//   // }, [orderData]);

// //   return (
// //     <div>
// //       <div>
// //         <Navbar />
// //       </div>

// //       {/* <div className="container">
// //         <div className="row">
// //           {orderData != null
// //             ? Array(orderData).map((data) => {
              
// //                 return data.orderData
// //                   ? data.orderData.order_data
// //                       .slice(0)
// //                       .reverse()
// //                       .map((item) => {
// //                         return item.map((arrayData) => {                       
// //                           return (
// //                             <div>
// //                               {arrayData.Order_date ? (
// //                                 <div className="m-auto mt-5">
// //                                   {(data = arrayData.Order_date)}
// //                                   <hr />
// //                                 </div>
// //                               ) :
// //                               (
// //                                 <div className="col-12 col-md-6 col-lg-3">
// //                                   <div
// //                                     className="card mt-3"
// //                                     style={{
// //                                       width: "16rem",
// //                                       maxHeight: "360px",
// //                                     }}
// //                                   >
// //                                     <img
// //                                       src={arrayData.img}
// //                                       className="card-img-top"
// //                                       alt="..."
// //                                       style={{
// //                                         height: "120px",
// //                                         objectFit: "fill",
// //                                       }}
// //                                     />
// //                                     <div className="card-body">
// //                                       <h5 className="card-title">
// //                                         {arrayData.name}
// //                                       </h5>
// //                                       <div
// //                                         className="container w-100 p-0"
// //                                         style={{ height: "38px" }}
// //                                       >
// //                                         <span className="m-1">
// //                                           {arrayData.qty}
// //                                         </span>
// //                                         <span className="m-1">
// //                                           {arrayData.size}
// //                                         </span>
// //                                         <span className="m-1">{data}</span>
// //                                         <div className=" d-inline ms-2 h-100 w-20 fs-5">
// //                                           ₹{arrayData.price}/-
// //                                         </div>
// //                                       </div>
// //                                     </div>
// //                                   </div>
// //                                 </div>
// //                               )}
// //                             </div>
// //                           );
// //                         });
// //                       })
// //                   : "";
// //               })
// //             : ""}
// //         </div>
// //       </div> */}
// //       <div className="row">
// //   {orderData != null
// //     ? Array(orderData).map((key) => {
// //         const data = orderData[key].orderData;
       
// //         // {console.log(typeof data);}
// //         return data
// //           ? data.order_data
// //               .slice(0)
// //               .reverse()
// //               .map((item) => {
// //                 return item.map((arrayData) => {
// //                   return (
// //                     <div key={arrayData.Order_date}>
// //                       {arrayData.Order_date ? (
// //                         <div className="m-auto mt-5">
// //                           {arrayData.Order_date}
// //                           <hr />
// //                         </div>
// //                       ) :(
// //                         <div className="col-12 col-md-6 col-lg-3">
// //                           <div
// //                             className="card mt-3"
// //                             style={{
// //                               width: "16rem",
// //                               maxHeight: "360px",
// //                             }}
// //                           >
// //                             <img
// //                               src={arrayData.img}
// //                               className="card-img-top"
// //                               alt="..."
// //                               style={{
// //                                 height: "120px",
// //                                 objectFit: "fill",
// //                               }}
// //                             />
// //                             <div className="card-body">
// //                               <h5 className="card-title">
// //                                 {arrayData.name}
// //                               </h5>
// //                               <div
// //                                 className="container w-100 p-0"
// //                                 style={{ height: "38px" }}
// //                               >
// //                                 <span className="m-1">
// //                                   {arrayData.qty}
// //                                 </span>
// //                                 <span className="m-1">
// //                                   {arrayData.size}
// //                                 </span>
// //                                 <span className="m-1">{data}</span>
// //                                 <div className=" d-inline ms-2 h-100 w-20 fs-5">
// //                                   ₹{arrayData.price}/-
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       )}
// //                     </div>
// //                   );
// //                 });
// //               })
// //           : "oops";
// //       })
// //     : null}
// // </div>


// //       <Footer />
// //     </div>
// //   );
// return (
//   <div>
//     <div>
//          <Navbar />
//                </div>

//     <div className="row">
//       {orderData != null
//         ? Object.keys(orderData).map((key) => {
//             const data = orderData[key].orderData;
//             return data
//               ? data.order_data
//                   .slice(0)
//                   .reverse()
//                   .map((item) => {
//                     return item.map((arrayData) => {
//                       return (
//                         <div key={arrayData.Order_date}>
//                           {arrayData.Order_date ? (
//                             <div className="m-auto mt-5">
//                               {arrayData.Order_date}
//                               <hr />
//                             </div>
//                           ) : (
//                             <div className="col-12 col-md-6 col-lg-3">
//                               {/* ... */}
//                             </div>
//                           )}
//                         </div>
//                       );
//                     });
//                   })
//               : "oops";
//           })
//         : "null"}
//     </div>
//     {/* ... */}
//   </div>
// );

// }

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      try {
        const response = await fetch("http://localhost:5000/api/myOrderData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }),
        });
        const data = await response.json();
        console.log(data);
        setorderData(data);
        console.log(orderData);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  useEffect(() => {
    console.log("form orderdata");
    console.log(orderData);
  }, [orderData]);

  return (
    <div>
      <Navbar />

      <div className="row">
        {orderData != null
          ? Object.keys(orderData).map((key) => {
          
              const data = orderData[key].orderData;
              console.log(data);
              return data
                ? data.order_data
                    .slice(0)
                    .reverse()
                    .map((item) => {
                      return item.map((arrayData) => {
                        return (
                          <div key={arrayData.Order_date}>
                            {arrayData.Order_date ? (
                              <div className="m-auto mt-5">
                                {arrayData.Order_date}
                                <hr />
                              </div>
                            ) : (
                              <div className="col-12 col-md-6 col-lg-3">
                                {/* ... */}
                              </div>
                            )}
                          </div>
                        );
                      });
                    })
                : "oops";
            })
          : "dfm "}
      </div>

      <Footer />
    </div>
  );
}
