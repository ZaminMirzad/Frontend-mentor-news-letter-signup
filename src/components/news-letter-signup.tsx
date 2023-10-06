import "./news-letter-signup.scss";

import illustration from "../assets/images/illustration-sign-up-desktop.svg";
import chech from "../assets/images/icon-list.svg";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction, useState } from "react";
import Completed from "./completed";

declare module "*.svg" {
  const content: any;
  export default content;
}

const list = [
  { id: 1, text: "Product discovery and building what matters" },
  { id: 2, text: "Measuring to ensure updates are a success" },
  { id: 3, text: "And much more..." },
];

export default function NewsLetterSignUp() {
  const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false);

  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email required" }).email({
      message: "Valid email required",
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<ValidationSchema>({ resolver: zodResolver(validationSchema) });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    setIsOpen(true);
  };

  if (isOpen) {
    return <Completed email={getValues("email")} dismiss={setIsOpen} />;
  }

  return (
    <>
      <div className="wrapper">
        <div className="left">
          <h1 className="heading">Stay updated!</h1>
          <p>Join 60,000+ project managers recieving monthly updates on:</p>
          <ul className="list">
            {list.map(({ id, text }) => (
              <li key={id}>
                <span>
                  <img src={chech} alt="check" />
                </span>
                <p>{text}</p>
              </li>
            ))}
          </ul>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="input">
                Email address{" "}
                {errors.email && (
                  <div className="error"> {errors.email?.message}</div>
                )}
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className={errors.email && "error-input"}
                    placeholder="email@company.com"
                  />
                )}
              />
            </div>
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className="right">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
    </>
  );
}
