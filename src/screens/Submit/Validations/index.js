import * as yup from "yup"
export const basicSchema = yup.object().shape({
    title: yup.string().min(5, "Title is too short").required("Title is Mandatory .."),
    abs: yup.string().min(5, "Abstract is too short").required("Abstract is Mandatory"),
    email: yup.string().email(),
    keyws: yup.array().required("Keywords are Mandatory..")
})