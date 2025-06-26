import { Button } from "@/components/ui/button";
import ErrorBoundaryIcon from "@/utils/icons/ErrorBoundaryIcon";
import Text, { colorPalleteObj } from "../text/Text";

const Fallback = ({ error }: any) => {
  return (
    <div className="py-12 px-16 flex flex-col items-center">
      <ErrorBoundaryIcon type="technical-error" />

      <div className="flex flex-col items-center gap-6">
        <pre
          style={{
            color: colorPalleteObj?.default,
            fontWeight: "bold",
            fontSize: "32px",
          }}
        >
          Technical error
        </pre>
        <div className="flex flex-col gap-4 items-center">
          <pre style={{ color: colorPalleteObj?.hint }}>
            We’ve encountered a technical issue on our end and are currently
            addressing it.
          </pre>
          <pre style={{ color: colorPalleteObj?.success }}>
            Thank you for your patience! 🚀🚀
          </pre>
        </div>
        <pre style={{ color: colorPalleteObj?.danger }}>{error.stack}</pre>
        <Button
          onClick={() => window.location.replace("/")}
          className="hover:cursor-pointer"
          size={"lg"}
        >
          <Text size="lg" type="white">
            Refresh
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default Fallback;
