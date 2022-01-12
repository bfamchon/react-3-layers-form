import CreateUserApi from "./containers/create-user/CreateUserApi";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Create User Page</h1>
          <p>Create user form is in here:</p>
        <CreateUserApi />
      </div>
    </QueryClientProvider>
  );
}
