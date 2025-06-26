import ErrorBoundaryIcon from "@/utils/icons/ErrorBoundaryIcon";
import Text from "../text/Text";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="py-4 px-16 flex flex-col items-center gap-6 w-full">
        <Text type="hint" size="lg">
          Uh-oh, looks like you took a wrong turn !!!
        </Text>
        <Text size="5xl">Ooops! Page not found</Text>
        <ErrorBoundaryIcon type="page-not-found" />
      </div>
    </div>
  );
};

export default PageNotFound;
