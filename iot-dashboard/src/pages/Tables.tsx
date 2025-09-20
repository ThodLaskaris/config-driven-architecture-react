import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import Tables from '../components/Tables';
import { getTableConfig } from '../config/ITablesConfig';
import './Page.css';
import { useApi } from '../hooks/useApi';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const config = getTableConfig(name ?? '');
  const endpoint = config.endpoint;
  const { result: rows, loading, error, refetch } = useApi<any[]>(endpoint, 'GET', undefined, undefined, [endpoint]);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonText class="ion-text-left ion-text-uppercase ion-text-title">
            {config.title}
          </IonText>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonText class="ion-text-left ion-text-uppercase ion-text-title">
              {config.title}
            </IonText>
          </IonToolbar>
        </IonHeader>
        {loading && <div>Loading..</div>}
        {error && <div style={{ color: 'red' }}>{`BR-${error}`}</div>}
        <Tables
          {...config}
          rows={rows || []}
          resource={config.resource}
          onDelete={() => refetch()} // ή απλά onDelete={refetch}
        />
      </IonContent>
    </IonPage>
  );
};

export default Page;

// import React from 'react';
// import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonToolbar } from '@ionic/react';
// import { useParams } from 'react-router';
// import Tables from '../components/Tables';
// import { getTableConfig } from '../config/ITablesConfig';
// import './Page.css';
// // import { useApi } from '../hooks/useApi';

// function generateMockRows(type: string, count: number) {
//   if (type === 'Commands') {
//     return Array.from({ length: count }).map((_, i) => ({
//       id: i + 1,
//       ID: i + 1,
//       Sent: `2023-09-${(i % 30) + 1}`,
//       Completed: Math.random() > 0.5,
//       CommandCode: `CMD${i}`,
//       CommandParams: `param${i}`,
//       DeviceId: `dev${i}`,
//       LoraWanPort: 10 + (i % 5),
//       ExecutedAt: `2023-09-${(i % 30) + 1}T12:00:00`,
//       CreatedAt: `2023-09-${(i % 30) + 1}T10:00:00`,
//       ValidUntil: `2023-12-${(i % 30) + 1}`,
//       Client: `Client${i}`,
//     }));
//   }
//   if (type === 'Commands Outcome') {
//     return Array.from({ length: count }).map((_, i) => ({
//       id: i + 1,
//       Name: `Outcome${i}`,
//       Type: `Type${i % 3}`,
//       Status: ['OK', 'FAIL', 'PENDING'][i % 3],
//       'Last Seen': `2023-09-${(i % 30) + 1}`,
//       Location: `Loc${i}`,
//     }));
//   }
//   // Devices
//   return Array.from({ length: count }).map((_, i) => ({
//     Name: `Device${i}`,
//     Serial: `SN${1000 + i}`,
//     EUID: `EUID${i}`,
//     Type: ['Sensor', 'Actuator'][i % 2],
//     Manufacturer: `Manuf${i % 5}`,
//     Wattage: 10 + (i % 10),
//     'Avg. Cons.': 5 + (i % 3),
//     Lat: 37.9 + Math.random(),
//     Lng: 23.7 + Math.random(),
//     'Created At': `2023-09-${(i % 30) + 1}`,
//     'Activated At': `2023-10-${(i % 30) + 1}`,
//     'Last Online': `2023-11-${(i % 30) + 1}`,
//     id: i + 1,
//     ID: i + 1,
//   }));
// }

// const Page: React.FC = () => {
//   const { name } = useParams<{ name: string }>();
//   const config = getTableConfig(name ?? '');
//   // const endpoint = config.endpoint;
//   // const { result: rows, loading, error } = useApi<any[]>(endpoint, 'GET', undefined, undefined, [endpoint]);

//   // Χρησιμοποίησε mock δεδομένα
//   const rows = generateMockRows(config.title, 250);

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonMenuButton />
//           </IonButtons>
//           <IonText class="ion-text-left ion-text-uppercase ion-text-title">
//             {config.title}
//           </IonText>
//         </IonToolbar>
//       </IonHeader>

//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonText class="ion-text-left ion-text-uppercase ion-text-title">
//               {config.title}
//             </IonText>
//           </IonToolbar>
//         </IonHeader>
//         <Tables {...config} rows={rows} />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Page;