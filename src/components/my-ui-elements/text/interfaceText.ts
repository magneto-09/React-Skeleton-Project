import { type ReactNode } from "react";

export type Size =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export type colorPallete =
  | "default"
  | "hint"
  | "danger"
  | "warning"
  | "success"
  | "primary"
  | "white"
  | "violet";

export interface TextProps {
  children: ReactNode;
  size?: Size;
  type?: colorPallete;
  strong?: boolean;
  underline?: boolean;
  ellipsis?: boolean;
  multilineEllipsis?: boolean;
  className?: string; // allow custom Tailwind classes
  style?: React.CSSProperties; // allow inline styling
}
