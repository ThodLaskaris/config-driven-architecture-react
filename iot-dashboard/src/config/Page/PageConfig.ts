import { AppPage } from "../../types/Page"

export const appPages: AppPage[] = [
  {
    title: 'Commands',
    children: [
      {
        title: 'Commands',
        url: '/tables/Commands',
      },
      {
        title: 'Outcome',
        url: '/tables/CommandOutcome',
      },
    ]
  },
  {
    title: 'Devices',
    children: [
      {
        title: 'Devices',
        url: '/tables/Devices',
      },
      {
        title: 'Correlated Devices',
        url: '/tables/Correlations',
      }
    ]
  },
  {
    title: 'Messages',
    children: [
      {
        title: 'Messages',
        url: '/tables/Messages',
      }
    ]
  }
];
// export const appPages: AppPage[] = [
//   {
//     title: 'Commands',
//     children: [
//       {
//         title: 'Commands',//Send Command Button modal
//         url: 'Commands',
//       },
//       {
//         title: 'Commands Outcome',
//         url: 'Commands/outcome',
//       }
//     ]
//   },
//   {
//     title: 'Devices',
//     children: [
//       {
//         title: 'All Devices',
//         url: 'tables/Devices'
//       },
//       {
//         title: 'Device Types',
//         url: 'tables/Device/Types'
//       },
//       {
//         title: 'Device Correlations',
//         url: 'tables/Correlations'
//       },
//       {
//         title: 'Last Seen Devices',
//         url: 'tables/LastSeen'
//       },
//       {
//         title: 'New Device',
//         url: 'tables/CreateDevice'
//       },
//     ]
//   },
//   {
//     title: 'Messages',
//     children: [
//       {
//         title: 'All Messages',
//         url: '/tables/Messages'
//       }
//     ]
//   },
//   {
//     title: 'Manufacturers',
//     url: '/tables/Manufacturers'
//   },
//   {
//     title: 'Statistics',
//     url: '/Statistics'
//   }
// ];