import { React, useState } from "react";
import Heading from "../../Heading";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "../../Button";

const Step1 = ({ handleNext }) => {
  //options for the dropdowns
  const timeOptions = [
    "12:00PM",
    "1:00PM",
    "2:00PM",
    "6:00PM",
    "7:00PM",
    "8:00PM",
  ];
  const dinerOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const occasionOptions = [
    "Anniversary",
    "Business Meeting",
    "Birthday",
    "Casual",
  ];

  //YUP VALIDATION SCHEMA USED IN FORMIK

  const phoneRegExp =
    /^\+?(\d{0,4})?[-.\s]?(\(?\d{3}\)?)?[-.\s]?(\d{3})[-.\s]?(\d{4})?$/;

  const SignupSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    diners: Yup.number().required("Number of diners is required"),
    occasion: Yup.string().required("Occasion type is required"),
  });

  return (
    <section className="section-container ">
      <div className="form-section">
        <div>
          <Heading>Find a Table for Any Ocassion.</Heading>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <Formik
            initialValues={{
              date: "",
              time: "",
              diners: "",
              occasion: "", // Ensure this is an empty string
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // alert(JSON.stringify(values, null, 2));
              console.log(values);
              handleNext(values);
            }}>
            <Form className="form-inputs-container">
              <div>
                <label htmlFor="date">Date:</label>
                <Field
                  className="form-field"
                  type="date"
                  id="date"
                  name="date"
                />
                <ErrorMessage
                  className="form-error-message"
                  name="date"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="times">Time:</label>
                <Field as="select" className="form-field" id="time" name="time">
                  <option value="" disabled>
                    select time
                  </option>
                  {timeOptions.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>
                      {timeOption}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  className="form-error-message"
                  name="time"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="time">No. of Diners:</label>
                <Field
                  as="select"
                  className="form-field"
                  id="diners"
                  name="diners">
                  <option value="" disabled>
                    Select number of diners
                  </option>
                  {dinerOptions.map((dinerOption) => (
                    <option key={dinerOption} value={dinerOption}>
                      {dinerOption}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  className="form-error-message"
                  name="diners"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="time">Ocassion Type:</label>
                <Field
                  as="select"
                  className="form-field"
                  id="occasion"
                  name="occasion">
                  <option value="" disabled>
                    Select occasion type
                  </option>
                  {occasionOptions.map((occasionOption) => (
                    <option key={occasionOption} value={occasionOption}>
                      {occasionOption}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="occasion" component="div" />
              </div>
              <Button type="submit">Next</Button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Step1;

// <section className="main-section">
//   <Heading className="section-heading">
//     Find a Table for Any Occasion
//   </Heading>
//   <div>
//     <img src="" alt="" />
//     <img src="" alt="" />
//   </div>
//   <div>
//     <form onSubmit={handleSubmit}>
//       <div className="flex-between gap-1">
//         <div>
//           <input
//             placeholder="Date"
//             type="date"
//             name="date"
//             value={reservation.date}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <select
//             name="time"
//             value={reservation.time}
//             onChange={handleChange}>
//             <option disabled value="">
//               Select a time
//             </option>
//             {timeOptions.map((time) => (
//               <option key={time} value={time}>
//                 {time}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div>
//         <select
//           value={reservation.diners}
//           name="diners"
//           onChange={handleChange}>
//           <option disabled value="">
//             Select Number of Diners
//           </option>
//           {dinerOptions.map((dinerOption) => (
//             <option key={dinerOption}>{dinerOption}</option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <select
//           name="occasion"
//           value={reservation.occasion}
//           onChange={handleChange}>
//           <option disabled value="occasion">
//             Select occasion
//           </option>
//           {occasionOptions.map((occasionOption) => (
//             <option key={occasionOption}>{occasionOption}</option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <p>Seating Options</p>
//         <div className="radio-group">
//           <label htmlFor="Standard">Standard</label>
//           <input type="radio" name="standard" id="standard" />
//         </div>
//         <div className="radio-group">
//           <label htmlFor="outside">Outside</label>
//           <input type="radio" name="outside" id="outside" />
//         </div>
//       </div>
//     </form>
//   </div>
// </section>
