import CreateUserView from "../../components/CreateUserView";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CreateUserModel } from "../../models/CreateUserModel";

const CreateUserFormSchema = yup.object().shape({
  username: yup.string().min(5).required(),
  email: yup.string().email().required()
  //... more fields here
});

interface Props {
  defaultValues: CreateUserModel;
  onSubmit: (data: CreateUserModel) => Promise<Response>;
}

const CreateUserLogic = ({ defaultValues, onSubmit }: Props) => {
  const form = useForm<CreateUserModel>({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(CreateUserFormSchema)
  });

  const handleSubmit = async (data: CreateUserModel) => {
    await onSubmit(data)
      .then(() => form.reset(data))
      .catch((err) => console.error(err));
  };

  return <CreateUserView form={form} onSubmit={handleSubmit} />;
};

export default CreateUserLogic;
