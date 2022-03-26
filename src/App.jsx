import { FormGenerator } from "./react-form-generator/Form/FormGenerator";

const App = () => {
  const onSubmit = (data) => console.log(data);
  const formSchema = {
    id: "",
    fieldSets: {
      rows: [
        {
          type: "text",
          name: "city",
          label: "Istanbul",
          id: "city",
          onSubmit: onSubmit,
        },
        {
          type: "select",
          name: "city",
          label: "Istanbul",
          id: "city",
          onSubmit: onSubmit,
        },
      ],
    },
  };
  return <div className='App'></div>;
};

export default App;
