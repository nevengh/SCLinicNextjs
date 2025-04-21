import { Customer } from "../../DB/Customer";
import CustomerReviewBox from "../shared/CustomerReviewBox/CustomerReviewBox";
import Slider from "../shared/Slider/Slider";

import "./CustomerReview.css";

const CustomerReview = () => {
    const customers = Customer()
  return (
    <div className="CustomerReview">
    <Slider
      items={customers}
      renderItem={(customer) => (
        <CustomerReviewBox
          key={customer.id}
          name={customer.name}
          altImage={customer.name}
          image={customer.image}
          review={customer.review}
          star={customer.stars} 
        />
      )}
    />
  </div>

  );
};

export default CustomerReview;
