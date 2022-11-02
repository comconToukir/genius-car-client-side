import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || 'unregistered';
    const message  = form.message.value;

    const order = {
      serviceId: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message
    }

    //TODO: do data validation before posting
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged) {
        alert("Order placed successfully")
        form.reset();
      }
    })
    .catch(error => console.error(error))
  };

  return (
    <div>
      <form onSubmit={handlePlaceOrder} className="text-center">
        <h2 className="text-3xl">Your Order: {title}</h2>
        <h4 className="text-2xl">Service Price: {price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            placeholder="First Name"
            className="input input-ghost input-bordered w-full"
            aria-label=""
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-ghost input-bordered w-full"
            aria-label=""
            name="lastName"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-ghost input-bordered w-full"
            aria-label="phone"
            name="phone"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-ghost input-bordered w-full"
            aria-label=""
            name="email"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-4"
          placeholder="Your Message"
          name="message"
        ></textarea>
        <input
          className="btn btn-orange-500"
          type="submit"
          value="Place Your Order"
          aria-label="Place Your Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
