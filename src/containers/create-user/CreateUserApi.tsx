import { useQuery } from "react-query";
import CreateUserLogic from "./CreateUserLogic";
import { CreateUserModel } from "../../models/CreateUserModel";

const CreateUserApi = () => {
  const { isLoading, data } = useQuery("createUserData", () =>
    fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
      res.json()
    )
  );

  const handleSubmit = async (data: CreateUserModel) => {
    const submitData = {
      name: data.username,
      email: data.email,
      createdAt: Date.now().toString()
    };
    // return async function to submit data to backend
    return fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData)
    });
  };

  // return early if initial form data isn't loaded
  if (isLoading) return <div>Loading...</div>;

  const defaultValues = {
    username: data?.name ?? "",
    email: data?.email ?? ""
  };

  return (
    <CreateUserLogic defaultValues={defaultValues} onSubmit={handleSubmit} />
  );
};

export default CreateUserApi;
