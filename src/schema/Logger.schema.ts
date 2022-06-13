import * as Yup from "yup";

export const LoggerSchema = Yup.object().shape(
  {
    username: Yup.string()
      .min(5, "Username must be 5 characters or more!")
      .max(15, "Username must be 15 characters or less!")
      .required("Username is required!"),

    joinedRoom: Yup.string().when("createdRoom", {
      is: (val: string) => !!val,
      then: Yup.string()
        .min(5, "Join room must be 5 characters or more!")
        .max(30, "Must be 30 characters or less!"),
      otherwise: Yup.string()
        .min(5, "Join room must be 5 characters or more!")
        .max(30, "Must be 30 characters or less!")
        .required("Join or create room field is required!"),
    }),

    createdRoom: Yup.string().when("joinedRoom", {
      is: (val: string) => !!val,
      then: Yup.string()
        .min(5, "Join room must be 5 characters or more!")
        .max(30, "Must be 30 characters or less!"),
      otherwise: Yup.string()
        .min(5, "Join room must be 5 characters or more!")
        .max(30, "Must be 30 characters or less!")
        .required("Join or create room field is required!"),
    }),
  },
  [["joinedRoom", "createdRoom"]]
);
