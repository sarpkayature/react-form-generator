import { XormInput } from "./react-form-generator/index";

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
  return (
    <div className='App'>
      <XormInput
        name='city'
        label='City'
        defaultValues={{ city: "Istanbul" }}
        id='city'
        onSubmit={onSubmit}
      />
      <input type='submit' form='city' value='Submit' />
    </div>
  );
};

export default App;
