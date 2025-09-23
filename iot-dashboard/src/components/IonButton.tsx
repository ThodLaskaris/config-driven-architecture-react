import React from "react";
import { IonButton } from "@ionic/react";
import { ReusableIonButtonProps } from '../types/Button';

const ReusableIonButton: React.FC<ReusableIonButtonProps> = ({
  onClick,
  color = "default",
  expand,
  disabled = false,
  className,
  children,
}) => {
  return (
    <IonButton
      onClick={onClick}
      color={color}
      expand={expand}
      disabled={disabled}
      className={className}
      data-id='ion-button'
    >
      {children}
    </IonButton>
  );
};


export default ReusableIonButton;