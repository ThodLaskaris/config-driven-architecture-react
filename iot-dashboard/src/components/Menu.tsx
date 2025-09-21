import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import './Menu.css';
import { appPages } from '../config/Page/PageConfig';
import React, { useState } from 'react';
import { menuController } from '@ionic/core';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Menu: React.FC = () => {
  const [openParent, setOpenParent] = useState<string | null>(null);
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>HelloWorld</IonListHeader>
          <IonNote>user@email.com</IonNote>
        </IonList>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => (
            <React.Fragment key={index}>
              <IonItem
                button
                onClick={async () => {
                  if (appPage.children && appPage.children.length > 0) {
                    setOpenParent(openParent === appPage.title ? null : appPage.title);
                  } else if (appPage.url) {
                    await menuController.close();
                  }
                }}
                className={appPage.url && location.pathname === appPage.url ? 'selected' : ''}
                {...(!(appPage.children && appPage.children.length > 0) && appPage.url && {
                  routerLink: appPage.url,
                  routerDirection: "none"
                })}
                lines="none"
                detail={!!(appPage.children && appPage.children.length > 0)}
              >
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
              {/* Children: IonMenuToggle + routerLink */}
              {openParent === appPage.title && appPage.children && appPage.children.map((child, cIdx) => (
                <IonMenuToggle key={cIdx} autoHide={false}>
                  <IonItem
                    className={location.pathname === child.url ? 'selected' : ''}
                    routerLink={child.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                    style={{ paddingLeft: 32 }}
                    onClick={async () => await menuController.close()}
                  >
                    <IonLabel>{child.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              ))}
            </React.Fragment>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;