import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import clsx from "clsx";

interface LoaderProps {
  rows?: number;
  className?: string; // allow custom Tailwind classes
}

export const SkeletonLoader = ({
  rows = 12,
  className = "px-16 py-8",
}: LoaderProps) => {
  return (
    <div className={clsx(className)}>
      <Box>
        {[...Array(rows)]?.map((_, idx) => (
          <Skeleton key={idx} />
        ))}
      </Box>
    </div>
  );
};
