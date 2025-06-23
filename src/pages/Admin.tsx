import Text from "@/components/my-ui-elements/text/Text";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navTo = useNavigate();

  const handleClick = (subroute: string): any => {
    navTo(`/admin/${subroute}`);
  };

  return (
    <div className="flex items-center gap-8 p-2 ">
      <div
        className="flex items-center hover:cursor-pointer justify-center p-4 bg-white border-2 border-gray-300 rounded-lg shadow-sm"
        onClick={() => handleClick("users")}
      >
        <Text size="lg">Manage Users</Text>
      </div>
      <div className="flex items-center hover:cursor-pointerjustify-center p-4 bg-white border-2 border-gray-300 rounded-lg shadow-sm">
        <Text size="lg">Manage System</Text>
      </div>
      <div
        className="flex items- hover:cursor-pointer justify-center p-4 bg-white border-2 border-gray-300 rounded-lg shadow-sm"
        onClick={() => handleClick("roles")}
      >
        <Text size="lg">Manage Roles</Text>
      </div>
    </div>
  );
};

export default Admin;
