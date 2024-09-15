// import React from "react";
// import { CheckIcon } from "@heroicons/react/20/solid";

// const tiers = [
//   {
//     name: "Basic Package",
//     id: "tier-hobby",
//     href: "#",
//     priceMonthly: "$1000",
//     description:
//       "The perfect plan if you're just getting started with marketing your property.",
//     features: ["Five Year License"],
//     featured: false,
//   },

//   {
//     name: "Premium",
//     id: "tier-enterprise",
//     href: "#",
//     priceMonthly: "$2000",
//     description:
//       "The perfect plan if you're just getting started with marketing your property.",
//     features: ["Five Year License"],
//     featured: true,
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const ShortTermRental = () => {
//   return (
//     <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//       <div>
//         <div />
//       </div>
//       <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
//         <h2 className="text-base font-semibold leading-7 text-indigo-600">
//           Photography & Videography Pricing
//         </h2>
//         <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//           Short Term Rental Packages
//         </p>
//       </div>
//       <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
//         {tiers.map((tier, tierIdx) => (
//           <div
//             key={tier.id}
//             className={classNames(
//               tier.featured
//                 ? "relative bg-gray-900 shadow-2xl"
//                 : "bg-white/60 sm:mx-8 lg:mx-0",
//               tier.featured
//                 ? ""
//                 : tierIdx === 0
//                 ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
//                 : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
//               "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
//             )}
//           >
//             <h3
//               id={tier.id}
//               className={classNames(
//                 tier.featured ? "text-indigo-400" : "text-indigo-600",
//                 "text-base font-semibold leading-7"
//               )}
//             >
//               {tier.name}
//             </h3>
//             <p className="mt-4 flex items-baseline gap-x-2">
//               <span
//                 className={classNames(
//                   tier.featured ? "text-white" : "text-gray-900",
//                   "text-5xl font-bold tracking-tight"
//                 )}
//               >
//                 {tier.priceMonthly}
//               </span>
//               <span
//                 className={classNames(
//                   tier.featured ? "text-gray-400" : "text-gray-500",
//                   "text-base"
//                 )}
//               >
//                 / one time payment
//               </span>
//             </p>
//             <p
//               className={classNames(
//                 tier.featured ? "text-gray-300" : "text-gray-600",
//                 "mt-6 text-base leading-7"
//               )}
//             >
//               {tier.description}
//             </p>
//             <ul
//               role="list"
//               className={classNames(
//                 tier.featured ? "text-gray-300" : "text-gray-600",
//                 "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
//               )}
//             >
//               {tier.features.map((feature) => (
//                 <li key={feature} className="flex gap-x-3">
//                   <CheckIcon
//                     className={classNames(
//                       tier.featured ? "text-indigo-400" : "text-indigo-600",
//                       "h-6 w-5 flex-none"
//                     )}
//                     aria-hidden="true"
//                   />
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//             <a
//               href={tier.href}
//               aria-describedby={tier.id}
//               className={classNames(
//                 tier.featured
//                   ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
//                   : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
//                 "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
//               )}
//             >
//               Get started today
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShortTermRental;
