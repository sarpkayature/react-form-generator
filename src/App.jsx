import { FormGenerator } from "./react-form-generator/Form/FormGenerator";
import * as Yup from "yup";

const App = () => {
  const formProps = {
    defaultValues: {
      city: "",
    },
    onSubmit: (data) => console.log(data),
    onClick: (data) => console.log(data),
  };

  const validationSchema = Yup.object().shape({
    city: Yup.string().required("this field is required"),
  });

  const formSchema = {
    // validation: validationSchema,
    rows: [
      {
        key: "city",
        name: "city",
        type: "text",
        label: "City",
        size: "small",
        variant: "outlined",
        fullWidth: true,
        margin: "normal",
        gridSize: { sm: 12, md: 6, lg: 6 },
      },
    ],
    btnProps: {
      actionChild: "Kaydet",
      closeChild: "Kapat",
      btnType: "submit",
      size: "small",
      variant: "outlined",
      btnGridSize: {
        sm: 6,
        md: 6,
        lg: 4,
      },
    },
  };

  const form = {
    formProps: formProps,
    formSchema: formSchema,
  };
  return (
    <div className='App'>
      <FormGenerator {...form} />
    </div>
  );
};

export default App;
