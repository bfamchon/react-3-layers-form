import { UseFormReturn } from "react-hook-form";
import { CreateUserModel } from "../models/CreateUserModel";

interface Props {
  form: UseFormReturn<CreateUserModel>;
  onSubmit: (data: CreateUserModel) => any;
}

const CreateUserView = ({ form, onSubmit }: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors, isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <div>
          <input
            type="text"
            placeholder="Enter username"
            {...register("username")}
          />
        </div>
        <div>{errors?.username?.message}</div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <input type="text" placeholder="Enter email" {...register("email")} />
        </div>
        <div>{errors?.email?.message}</div>
      </div>
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default CreateUserView;
