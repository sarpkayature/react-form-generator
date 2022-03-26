//@ts-nocheck
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import { FormProps, IFormRows } from "./types";

export const FormGenerator = (props: FormProps) => {
  const {
    formSchema: {
      rows,
      validationSchema,
      btnProps: {
        actionChild,
        closeChild,
        btnType,
        btnGridSize: { sm, md, lg },
        btnsize,
        btnvariant,
        btnActionIcon,
        btnCloseIcon,
      },
    },
    formProps: { id, defaultValues, onSubmit, onClick },
  } = props;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction='row'
        wrap='wrap'
        justify='center'
        alignItems='space-between'
        spacing={2}
      >
        {rows.map(
          (
            {
              key,
              name,
              type,
              label,
              size,
              variant,
              margin,
              style,
              fullWidth,
              color,
              options,
              gridSize: { sm, md, lg },
            }: IFormRows,
            index,
          ) => {
            return (
              <>
                {type === "text" ? (
                  <Grid item key={key} sm={sm} md={md} lg={lg}>
                    <Controller
                      name={name}
                      control={control}
                      defaultValue={defaultValues[name]}
                      render={({ field, formState }) => (
                        <TextField
                          {...field}
                          margin={margin || "normal"}
                          label={label || "no-label-given"}
                          size={size || "small"}
                          fullWidth={fullWidth || false}
                          variant={variant || "outlined"}
                          style={style || {}}
                          error={errors[name] ? true : false}
                          helperText={errors[name]?.message}
                          InputLabelProps={{
                            style: { color: "#f8f8f8f8" },
                          }}
                        />
                      )}
                    />
                  </Grid>
                ) : null}
                {type === "checkbox" ? (
                  <Grid item key={key} sm={sm} md={md} lg={lg}>
                    <Controller
                      name={name}
                      control={control}
                      defaultValue={defaultValues[name]}
                      render={({ field, formState }) => (
                        <FormControlLabel
                          label={label || "no-label-given"}
                          control={
                            <Checkbox
                              {...field}
                              color={color || "secondary"}
                              defaultChecked={defaultValues[name] || false}
                            />
                          }
                        />
                      )}
                    />
                  </Grid>
                ) : null}
                {type === "select" ? (
                  <Grid item key={key} sm={sm} md={md} lg={lg}>
                    <Controller
                      name={name}
                      control={control}
                      defaultValue={defaultValues[name]}
                      render={({ field }) => {
                        return (
                          <>
                            <FormControl sx={{ minWidth: 417 }}>
                              <InputLabel id={key}>
                                {label || "no-label-given"}
                              </InputLabel>
                              <Select
                                labelId={key}
                                id={key}
                                label={label || "no-label-given"}
                                size={size || "small"}
                                variant={variant || "outlined"}
                                color={color || "primary"}
                                fullWidth={fullWidth || false}
                                error={errors[name] ? true : false}
                                {...field}
                              >
                                {options?.map(({ label, value }) => {
                                  return (
                                    <MenuItem
                                      value={value}
                                      key={value}
                                      sx={{ background: "#303030" }}
                                    >
                                      {label}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                              <FormHelperText>
                                {errors[name]?.message
                                  ? errors[name].message
                                  : null}
                              </FormHelperText>
                            </FormControl>
                          </>
                        );
                      }}
                    />
                  </Grid>
                ) : null}
                {type === "date" ? (
                  <Grid item key={key} sm={sm} md={md} lg={lg}>
                    <Controller
                      name={name}
                      control={control}
                      defaultValue={defaultValues[name]}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          label={label || "no-label-given"}
                          inputFormat='dd/MM/yyyy'
                          renderInput={(params) => <TextField {...params} />}
                        />
                      )}
                    />
                  </Grid>
                ) : null}
              </>
            );
          },
        )}
      </Grid>
      <Grid
        container
        direction='column'
        wrap='wrap'
        justify='center'
        alignItems='flex-end'
      >
        <Grid item sm={sm} md={md} lg={lg}>
          <Button
            type={btnType || "submit"}
            onClick={onClick}
            size={btnsize || "small"}
            variant={btnvariant || "outlined"}
            startIcon={btnCloseIcon}
            sx={{ mr: 2 }}
          >
            {closeChild}
          </Button>
          <Button
            type={btnType || "submit"}
            size={btnsize || "small"}
            variant={btnvariant || "outlined"}
            startIcon={btnActionIcon}
          >
            {actionChild}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
