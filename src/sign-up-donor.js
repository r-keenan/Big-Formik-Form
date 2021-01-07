import { findByLabelText } from "@testing-library/react";
import React from "react";
import { Styles } from "./Styles/SignUpFormStyles";
import { Formik, useField, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

//import Radio from "react-bootstrap";

/*Need to  npm install styled-components, formik, and yup*/

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const fileSelectedHandler = (event) => {
  console.log(event.target.files[0]);
};

//  const CustomRadio = ({ label, ...props }) => {
//    const [field] = useField(props, 'radio');
//    return <label htmlFor={...field} label={label}></label>;
// };

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const websiteRegExp = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const SignUpDonor = () => {
  return (
    <Styles>
      <Formik
        initialValues={{
          name: "",
          radioGroup: "",
          typeOfBusiness: "",
          tagLine: "",
          annualBudget: "",
          description: "",
          acceptedTerms: false,
          interestCause1: "",
          interestCause2: "",
          interestCause3: "",
          note1: "",
          note2: "",
          streetAddress: "",
          city: "",
          state: "",
          zipCode: "",
          primContactName: "",
          primContactPhone: "",
          primContactEmail: "",
          secContactName: "",
          secContactPhone: "",
          secContactEmail: "",
          website: "",
          facebook: "",
          linkedin: "",
          twitter: "",
          instagram: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Minimum amount of characters is 3.")
            .max(30, "Maximum amount of characters is 15.")
            .required("Required"),
          radioGroup: Yup.string()
            .required("A selection is required.")
            .oneOf(["Yes", "No"], "This is an invalid interest"),
          typeOfBusiness: Yup.string()
            .min(3, "Minimum amount of characters is 3.")
            .max(30, "Maximum amount of characters is 30."),
          tagLine: Yup.string()
            .min(8, "Minimum amount of characters is 8.")
            .max(30, "Maximum amount of characters is 30."),
          description: Yup.string()
            .min(25, "Minimum amount of characters is 25.")
            .max(500, "Maximum amount of characters is 500."),
          annualBudget: Yup.number()
            .moreThan(
              99.99,
              "Must be larger than $99.99. Exclude any commas or dollar signs."
            )
            .lessThan(
              9999999999.99,
              "Must be less than $9,999,999,999.99. Exclude any punctuation."
            )
            .required("Required"),
          interestCause1: Yup.string()
            .oneOf([], "This is an invalid interest")
            .required("Required"),
          interestCause2: Yup.string().oneOf([], "This is an invalid interest"),
          interestCause3: Yup.string().oneOf([], "This is an invalid interest"),
          notes1: Yup.string().max(250, "Maximum amount of characters is 250."),
          notes2: Yup.string().max(250, "Maximum amount of characters is 250."),
          streetAddress: Yup.string()
            .min(10, "Minimum amount of characters is 10.")
            .max(30, "Maximum amount of characters is 30."),
          city: Yup.string()
            .min(3, "Minimum amount of characters is 3.")
            .max(20, "Maximum amount of characters is 20.")
            .required("Required"),
          state: Yup.string()
            .min(2, "Minimum amount of characters is 2.")
            .max(2, "Maximum amount of characters is 2.")
            .required("Required"),
          zipCode: Yup.number()
            .moreThan(0, "Minimum amount of characters is 5.")
            .lessThan(100000, "Maximum amount of characters is 5.")
            .min(5, "Minimum amount of characters is 5.")
            .max(5, "Maximum amount of characters is 5."),
          primContactName: Yup.string()
            .min(10, "Minimum amount of characters is 3.")
            .max(20, "Maximum amount of characters is 20.")
            .required("Required"),
          primContactPhone: Yup.number()
            .min(9, "Minimum amount of characters is 9.")
            .max(9, "Maximum amount of characters is 9."),
          primContactEmail: Yup.string()
            .email("invalid email address")
            .min(10, "Minimum amount of characters is 10.")
            .max(40, "Maximum amount of characters is 40.")
            .required("Required"),
          secContactName: Yup.number()
            .min(10, "Minimum amount of characters is 3.")
            .max(20, "Maximum amount of characters is 20."),
          secContactPhone: Yup.number()
            .min(
              9,
              "Minimum amount of characters is 9. Exclude the country code."
            )
            .max(
              9,
              "Maximum amount of characters is 9. Exclude the country code."
            ),
          secContactEmail: Yup.string()
            .email("invalid email address")
            .min(10, "Minimum amount of characters is 10.")
            .max(40, "Maximum amount of characters is 40."),
          website: Yup.string()
            .matches(
              websiteRegExp,
              "Please enter a valid URL. It needs to start with https://"
            )
            .min(10, "Minimum amount of characters is 10.")
            .max(30, "Maximum amount of characters is 40."),
          facebook: Yup.string()
            .matches(
              websiteRegExp,
              "Please enter a valid URL. It needs to start with https://"
            )
            .min(10, "Minimum amount of characters is 10.")
            .max(30, "Maximum amount of characters is 40."),
          linkedin: Yup.string()
            .matches(
              websiteRegExp,
              "Please enter a valid URL. It needs to start with https://"
            )
            .min(10, "Minimum amount of characters is 10.")
            .max(30, "Maximum amount of characters is 40."),
          twitter: Yup.string()
            .matches(
              websiteRegExp,
              "Please enter a valid URL. It needs to start with https://"
            )
            .min(10, "Minimum amount of characters is 10.")
            .max(30, "Maximum amount of characters is 40."),
          instagram: Yup.string()
            .matches(
              websiteRegExp,
              "Please enter a valid URL. It needs to start with https://"
            )
            .min(10, "Minimum amount of characters is 10.")
            .max(30, "Maximum amount of characters is 40."),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form>
            <h1>Sign Up</h1>
            <CustomTextInput
              label="Business Name or Person's Name"
              name="name"
              type="text"
              placeholder=""
            />
            <div class="my-radio-group">Are you a business?</div>
            <div
              id="my-radio-subgroup"
              role="group"
              name="radioGroup"
              aria-labelledby="my-radio-group"
            >
              <label>
                <Field type="radio" name="radioGroup" value="Yes" />
                Yes
              </label>
              <label id="right-radio">
                <Field type="radio" name="radioGroup" value="No" />
                No
              </label>
            </div>
            <div>Business Logo</div>
            <div id="fileDiv">
              <input type="file" onChange={fileSelectedHandler} />
            </div>
            <CustomTextInput
              label="Type of Business"
              name="typeOfBusiness"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Tag Line"
              name="tagLine"
              type="text"
              placeholder=""
            />
            <CustomTextArea
              label="Description"
              name="description"
              type="text area"
              placeholder="Please fill out the description of your non-profit here."
            />
            <CustomTextInput
              label="Annual Donation Budget"
              name="annualBudget"
              type="text"
              placeholder=""
            />
            <CustomSelect label="Interest Cause 1" name="interestCause1">
              <option value=""></option>
              <option value="flight"></option>
              <option value="invisibility"></option>
              <option value="wealthy bat guy"></option>
              <option value="other"></option>
            </CustomSelect>
            <CustomSelect label="Interest Cause 2" name="interestCause2">
              <option value=""></option>
              <option value="flight"></option>
              <option value="invisibility"></option>
              <option value="wealthy bat guy"></option>
              <option value="other"></option>
            </CustomSelect>
            <CustomSelect label="Interest Cause 3" name="interestCause3">
              <option value=""></option>
              <option value="flight"></option>
              <option value="invisibility"></option>
              <option value="wealthy bat guy"></option>
              <option value="other"></option>
            </CustomSelect>
            <CustomTextInput
              label="Notes 1"
              name="notes1"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Notes 2"
              name="note2"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Street Address"
              name="streetAddress"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="City"
              name="city"
              type="text"
              placeholder=""
            />
            <CustomSelect label="State" name="state">
              <option value=""></option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DE</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </CustomSelect>
            <CustomTextInput
              label="Zip Code"
              name="zipCode"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Primary Contact Name"
              name="primContactName"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Primary Contact Phone"
              name="primContactPhone"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Primary Contact Email"
              name="primContactEmail"
              type="email"
              placeholder=""
            />
            <CustomTextInput
              label="Secondary Contact Name"
              name="secContactName"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Secondary Contact Phone"
              name="secContactPhone"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Secondary Contact Email"
              name="secContactEmail"
              type="email"
              placeholder=""
            />
            <CustomTextInput
              label="Website URL"
              name="website"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Facebook URL"
              name="facebook"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="LinkedIn URL"
              name="linkedin"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Twitter URL"
              name="twitter"
              type="text"
              placeholder=""
            />
            <CustomTextInput
              label="Instagram URL"
              name="instagram"
              type="text"
              placeholder=""
            />
            <CustomCheckbox name="acceptedTerms">
              I accept the terms and conditions.
            </CustomCheckbox>
            <button type="submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </Styles>
  );
};

export default SignUpDonor;
