import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const XormInput = (props) => {
  const { name, label, defaultValues, onSubmit, id } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} id={id}>
      <Controller
        name={name}
        label={label}
        control={control}
        defaultValue={defaultValues[name]}
        render={({ field }) => <TextField {...field} />}
      />
    </form>
  );
};

export default XormInput;
