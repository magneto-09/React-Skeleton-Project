import { Button } from "@/components/ui/button";
import ErrorBoundaryIcon from "@/utils/icons/ErrorBoundaryIcon";
import { useNavigate } from "react-router-dom";
import Text from "../text/Text";

interface NoDataUIProps {
  isGoBackBtn?: boolean;
}

const NoDataUI = ({ isGoBackBtn = true }: NoDataUIProps) => {
  const navTo = useNavigate();

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="flex flex-col items-center
       w-full">
        <ErrorBoundaryIcon type="no-data" />
        <div className="flex flex-col items-center gap-4 w-full">
          <Text size="3xl" strong={true}>
            No data found
          </Text>

          <Text type="hint">
            No data is available at the moment to be displayed.
          </Text>

          {isGoBackBtn ? (
            <Button onClick={() => navTo("/")} className="hover:cursor-pointer">
              Go Back
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoDataUI;
