import React from "react";
import { IonButton } from "@ionic/react";
import { ReusableIonButtonProps } from "../config/IButton";

const ReusableIonButton: React.FC<ReusableIonButtonProps> = ({
  onClick,
  color = "primary",
  expand, // default undefined, ή βάλε expand = "block" αν το θες πάντα block
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
    >
      {children}
    </IonButton>
  );
};


export default ReusableIonButton;