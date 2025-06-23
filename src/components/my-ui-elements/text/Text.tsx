import clsx from "clsx";
import type { TextProps } from "./interfaceText";

// sizeObj to match the Size type -> as dynamic string won't work by default
export const sizeObj = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
} as const;

// colorPalleteObj to match the colorPallete type
export const colorPalleteObj = {
  default: "	#000000",
  hint: " #767686",
  danger: " #DC3545",
  warning: "	#fe6e31",
  success: "	#18c098",
  primary: "	#0075FF",
} as const;

const Text = ({
  children, // children prop -> type : ReactNode
  size = "base",
  type = "default",
  strong = false,
  underline = false,
  ellipsis = false,
  multilineEllipsis = false,
  className,
  style = {},
}: TextProps) => {
  return (
    <span
      className={clsx(
        sizeObj[size],
        strong && "font-semibold",
        !strong && "font-medium", // fallback wt.
        underline && "underline-offset-4",
        ellipsis && "truncate",
        multilineEllipsis && `line-clamp-3`,
        className
      )}
      style={{
        ...style,
        color: colorPalleteObj[type],
        fontFamily: "serif",
      }}
    >
      {children}
    </span>
  );
};

export default Text;
