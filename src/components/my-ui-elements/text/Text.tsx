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
  white: "rgb(255, 255, 255)",
  default: "	#263238",
  hint: " #767686",
  danger: " #DC3545",
  warning: "	#fe6e31",
  success: "	#18c098",
  primary: "	#0075FF",
  violet: " #7A3B97",
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
        !strong && "font-normal", // fallback wt.
        underline && "underline underline-offset-4",
        ellipsis && "truncate",
        multilineEllipsis && `line-clamp-3`,
        className
      )}
      style={{
        ...style,
        color: colorPalleteObj[type],
      }}
    >
      {children}
    </span>
  );
};

export default Text;
