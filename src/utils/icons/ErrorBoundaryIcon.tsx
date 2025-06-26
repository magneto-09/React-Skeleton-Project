interface ErrorBoundarySvgProps {
  type: string;
}

const ErrorBoundaryIcon = ({ type }: ErrorBoundarySvgProps) => {
  switch (type) {
    case "technical-error":
      return <img src="/images/technical-error.svg" alt="No Data Image" />;

    case "no-data":
      return <img src="/images/no-data.svg" alt="No Data Image" />;

    case "page-not-found":
      return (
        <img src="/images/page-not-found.svg" alt="Page Not Found Image" />
      );

    case "unauthorized":
      return <img src="/images/unauthorized.svg" alt="Unauthorized Image" />;
  }
};

export default ErrorBoundaryIcon;
