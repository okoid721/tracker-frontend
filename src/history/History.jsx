// import React from 'react';
// import { useGlobalContext } from '../context/globalContext';
// const History = () => {
//   const { transactionHistory } = useGlobalContext();
//   const [...history] = transactionHistory();
//   return (
//     <div className=" flex flex-col gap-4">
//       <h2></h2>
//       {history.map((item) => {
//         const { _id, title, amount, date, type } = item;
//         return (
//           <div
//             className=" bg-[#FCF6F9] border-[2px] border-white shadow-lg p-4 rounded-[20px] flex justify-between items-center  "
//             key={_id}
//           >
//             <p
//               className={`${
//                 type === 'Income' ? 'text-red-700' : 'text-green-700'
//               }`}
//             >
//               {title}
//             </p>
//             <p
//               className={`${
//                 type === 'Income' ? 'text-red-700' : 'text-green-700'
//               }`}
//             >
//               {type === 'Income' ? `-${amount}` : `+${amount}`}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default History;
