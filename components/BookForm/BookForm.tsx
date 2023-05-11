import { FC } from "react";
import {
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  Error,
  Select,
  Button,
} from "../BookTour/BookTourStyled";
import { useForm, Controller } from "react-hook-form";
import { FormInputs } from "@/constants";
import { useBookForm } from "@/hooks/useBookForm";

interface BookFormProps {
  saveTour: (data: FormInputs) => void;
}

const BookForm: FC<BookFormProps> = ({ saveTour }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const { onFormSubmit, booking } = useBookForm(saveTour);

  return (
    <FormWrapper onSubmit={handleSubmit(onFormSubmit)}>
      {booking ? <h1>Update Your Booking</h1> : <h1>Confirm Your Booking</h1>}
      <InputWrapper>
        <Label>Name:</Label>
        <Controller
          name="name"
          control={control}
          defaultValue={booking?.name || ""}
          render={({ field }) => (
            <>
              <Input {...field} type="text" />
              {errors.name && <Error>{errors.name.message}</Error>}
            </>
          )}
          rules={{ required: "Name is required" }}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Email:</Label>
        <Controller
          name="email"
          control={control}
          defaultValue={booking?.email || ""}
          render={({ field }) => (
            <>
              <Input {...field} type="text" />
              {errors.email && <Error>{errors.email.message}</Error>}
            </>
          )}
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email",
            },
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Phone:</Label>
        <Controller
          name="phoneNo"
          control={control}
          defaultValue={booking?.phoneNo || ""}
          render={({ field }) => (
            <>
              <Input {...field} type="text" />
              {errors.phoneNo && <Error>{errors.phoneNo.message}</Error>}
            </>
          )}
          rules={{ required: "Phone is required" }}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Payment:</Label>
        <Controller
          name="paymentMethod"
          control={control}
          defaultValue={booking?.paymentMethod || ""}
          render={({ field }) => (
            <>
              <Select {...field}>
                <option value="">Select a payment method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bitcoin">Bitcoin</option>
              </Select>
              {errors.paymentMethod && (
                <Error>{errors.paymentMethod.message}</Error>
              )}
            </>
          )}
          rules={{ required: "Payment is required" }}
        />
      </InputWrapper>
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

export default BookForm;
