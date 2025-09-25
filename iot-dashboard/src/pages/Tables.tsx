import React, { useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { useApi } from '../hooks/useApi';
import { getTableConfig, paginationVars } from '../config/Table/TableHelper';
import Tables from '../components/Tables';
import './Page.css';
import { deleteById, update } from '../services/apiService';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const config = getTableConfig(name ?? '');
  const endpoint = config.endpoint;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(paginationVars[0]);

  const { result, loading, error, refetch } = useApi<any>(
    endpoint, {
    method: 'GET',
    dependencies: [endpoint, page, pageSize]
  }
  )
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
          rows={result?.data || []}
          resource={config.resource}
          page={page}
          pageSize={pageSize}
          rowCount={result?.total || 0}
          pageSizeOptions={paginationVars}
          onPageChange={setPage}
          onPageSizeChange={(size) => { setPageSize(size); setPage(0); }}
          onDelete={(row) => deleteById(config.resource, row.id, row)}
          refetch={refetch}
          onUpdate={(row) => update(config.resource, row.id, row)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Page;