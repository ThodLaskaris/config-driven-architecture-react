export interface ReusableIonButtonProps {
  onClick?: () => void;
  color?: string;
  expand?: 'full' | 'block',
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}