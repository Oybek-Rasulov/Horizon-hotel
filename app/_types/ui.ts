export interface ButtonProp {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  text?: string;
  bg?: string;
  className?: string;
}

export interface TitleProp {
  children: React.ReactNode;
  color?: string;
  size?: string | number;
  typing?: boolean;
  className?: string;
}

export interface NavLinkType {
  children?: React.ReactNode;
  href?: string;
}
