"use client";

import CustomDialog from "@/components/CustomDialog";
import { Button, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { type FC, useState } from "react";
import CalculatorSection from "./CalculatorSection";
import Image from "next/image";

interface InvestmentDialogProps {
  condition: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}
const steps = {
  1: "INVESTMENT CONDITION",
  2: "SHORT INVESTMENT CALCULATION (USDT)",
  3: "PAYMENT",
};
const InvestmentDialog: FC<InvestmentDialogProps> = ({ condition, open, setOpen }) => {
  const [stepNumer, setStepNumber] = useState(1);

  return (
    <CustomDialog open={open} onClose={() => {}} title={steps[stepNumer as keyof typeof steps]}>
      <DialogTitle>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <IconButton onClick={() => setOpen(false)} sx={{ p: 1 }}>
            <Image src="/images/icons/close.svg" alt="Close" width={24} height={24} />
          </IconButton>
        </Stack>
      </DialogTitle>
      {stepNumer === 1 && (
        <Stack justifyContent={"center"} alignItems="center" gap={4} p={4}>
          <Typography variant="h5-regular">{condition} </Typography>
          <Button variant="contained" onClick={() => setStepNumber(2)}>
            Continue
          </Button>
        </Stack>
      )}
      {stepNumer === 2 && (
        <Stack justifyContent={"center"} alignItems="center" gap={4} p={4}>
          <CalculatorSection />
          <Button variant="contained" onClick={() => setStepNumber(3)}>
            GO TO PAYMENT
          </Button>
        </Stack>
      )}
    </CustomDialog>
  );
};

export default InvestmentDialog;
