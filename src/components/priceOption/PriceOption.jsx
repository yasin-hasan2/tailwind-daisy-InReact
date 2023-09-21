// import React from 'react';

const PriceOption = () => {
  const gymShop = [
    {
      gym: "Fitness Plus Gym",
      membership_options: [
        {
          name: "Basic Membership",
          price: 29.99,
          title: "Basic Membership Plan",
          body: "Access to our cardio and weightlifting equipment. Perfect for those starting their fitness journey.",
        },
        {
          name: "Silver Membership",
          price: 49.99,
          title: "Silver Membership Plan",
          body: "Includes access to all equipment, group fitness classes, and locker rooms with showers.",
        },
        {
          name: "Gold Membership",
          price: 79.99,
          title: "Gold Membership Plan",
          body: "Our premium membership offers everything in Silver, plus personal training sessions and sauna access.",
        },
      ],
    },
  ];

  return (
    <div>
      <h1>this is price option</h1>
    </div>
  );
};

export default PriceOption;
