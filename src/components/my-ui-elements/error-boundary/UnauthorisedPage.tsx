import ErrorBoundaryIcon from "@/utils/icons/ErrorBoundaryIcon";
import Text from "../text/Text";
import { Button } from "@/components/ui/button";

const UnauthorisedPage = () => {
  return (
    <div className="py-8 px-16 flex items-center justify-between">
      <ErrorBoundaryIcon type="unauthorized" />
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <Text
            size="5xl"
            type="violet"
            strong={true}
            underline={true}
            className="italic"
          >
            Access denied
          </Text>
          <Text size="xl" type="hint">
            Contact your administrator if you believe this is a mistake.
          </Text>
        </div>
        <Button size={"lg"} className="hover:cursor-pointer">
          <Text size="lg" type="white">
            Go Back
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default UnauthorisedPage;
