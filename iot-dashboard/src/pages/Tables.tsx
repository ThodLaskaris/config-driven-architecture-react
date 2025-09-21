import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { useApi } from '../hooks/useApi';
import { getTableConfig } from '../config/Table/TableHelper';
import Tables from '../components/Tables';
import './Page.css';

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
          onDelete={refetch} 
          refetch={refetch}
        />
      </IonContent>
    </IonPage>
  );
};

export default Page;
