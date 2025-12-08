"use client";

import useToggleState from "@/hooks/use-toggleState";
import RHFTextField from "@/theme/components/hook-form/rhf-text-field";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";

const defaultValues = {
  username: "",
  password: "",
};

const FormSchema = Yup.object().shape({
  username: Yup.string().required("نام کاربری را وارد نمایید"),
  password: Yup.string().required("رمز عبور را وارد نمایید"),
});
const SigninForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, toggle] = useToggleState(false);

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
    mode: "onBlur",
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
  });

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: { xs: "100%", sm: "400px" }, gap: { xs: 5, md: 10 } }}
      component="form"
      onSubmit={onSubmit}
    >
      <FormProvider {...methods}>
        <RHFTextField name="username" label="username" dir="ltr" autoComplete="username" />
        <RHFTextField
          dir="ltr"
          name="password"
          label="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggle}>{showPassword ? <span>show</span> : <span>hide </span>}</IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Button color={"primary"} fullWidth size="large" type="submit" loading={loading} sx={{ mt: 2 }}>
          signin
        </Button>
        <Typography variant="p4-regular" color="primary.light" sx={{ cursor: "pointer" }}>
          forgot password?
        </Typography>
      </FormProvider>
    </Stack>
  );
};

export default SigninForm;
