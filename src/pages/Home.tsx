import UnauthorisedPage from "@/components/my-ui-elements/error-boundary/UnauthorisedPage";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api-services/home.services";

const Home = () => {
  const { data: getAllUseraData } = useQuery({
    queryKey: ["User", "GetAllUsers"],
    queryFn: () => getAllUsers(),
  });

  console.log(getAllUseraData);

  return (
    <>
      <UnauthorisedPage />
    </>
  );
};

export default Home;
