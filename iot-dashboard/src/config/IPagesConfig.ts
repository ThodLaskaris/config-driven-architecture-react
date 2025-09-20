export interface AppPage {
  title: string;
  url?: string;
  children?: AppPage[];
}

export const appPages: AppPage[] = [
  {
    title: 'Commands',
    children: [
      {
        title: 'Commands',//Send Command Button modal
        url: '/tables/Commands',
      },
      {
        title: 'Commands Outcome',
        url: '/tables/CommandsOutcome',
      }
    ]
  },
  {
    title: 'Devices',
    children: [
      {
        title: 'All Devices',
        url: '/tables/GetAllDevices'
      },
      {
        title: 'Device Types',
        url: '/Device/Types'
      },
      {
        title: 'Device Correlations',
        url: '/tables/Correlations'
      },
      {
        title: 'New Device',
        url: '/tables/CreateDevice'
      }
    ]
  },
  {
    title: 'Messages',
    children: [
      {
        title: 'All Messages',
        url: '/tables/GetAllMessages'
      }
    ]
  },
  {
    title: 'Manufacturers',
    url: '/tables/Manufacturers'
  },
  {
    title: 'Statistics',
    url: '/Statistics'
  }
];