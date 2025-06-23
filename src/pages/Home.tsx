import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api-services/home.services";
import Headers from "../components/Headers";

const Home = () => {
  const { data: getAllUseraData } = useQuery({
    queryKey: ["User", "GetAllUsers"],
    queryFn: () => getAllUsers(),
  });

  console.log(getAllUseraData);

  return <></>;
};

export default Home;
