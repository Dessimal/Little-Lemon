import Heading from "../../Heading";

const Step4 = () => {
  return (
    <section className="main-section">
      <div>
        <Heading>Booking Details</Heading>
        <form action="">
          <div>
            <input
              type="number"
              name=""
              id=""
              placeholder="Card Number"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name/Last Name"
            />
          </div>

          <div className="flex-between">
            <div>
              <label htmlFor="ExpDate">Exp Date</label>
              <input type="date" name="" id="" />
            </div>
            <div>
              <label htmlFor="Cvv">CVV</label>
              <input type="number" name="" id="" />
            </div>
          </div>

          <div>
            <label htmlFor="booking">
              Send me booking confirmation via text
            </label>
            <input type="radio" name="Send me" id="" />
            <label htmlFor="bookingEmail">
              Send me booking confirmation via email
            </label>
            <input type="radio" name="" id="" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Step4;
