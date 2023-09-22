// import React from 'react';

import PriceCard from "../priceCard/PriceCard";

const PriceOption = () => {
  const gymShop = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting equipment",
        "Access to locker rooms",
        "Access to cardio equipment",
        "Access to weightlifting equipment",
        "Access to locker rooms",
      ],
    },
    {
      id: 2,
      name: "Silver Membership",
      price: 49.99,
      features: [
        "All Basic Membership features",
        "Access to group fitness classes",
        "Access to sauna",
        "All Basic Membership features",
        "Access to group fitness classes",
        "Access to sauna",
      ],
    },
    {
      id: 3,
      name: "Gold Membership",
      price: 79.99,
      features: [
        "All Silver Membership features",
        "Personal training sessions (2 per month)",
        "Access to swimming pool",
        "All Silver Membership features",
        "Personal training sessions (2 per month)",
        "Access to swimming pool",
      ],
    },
    {
      id: 4,
      name: "Platinum Membership",
      price: 99.99,
      features: [
        "All Gold Membership features",
        "Unlimited personal training sessions",
        "Access to spa and massage services",
        "All Gold Membership features",
        "Unlimited personal training sessions",
        "Access to spa and massage services",
      ],
    },
    {
      id: 5,
      name: "Family Membership",
      price: 149.99,
      features: [
        "Access for the whole family (up to 4 members)",
        "All Platinum Membership features",
        "Childcare services",
        "Access for the whole family (up to 4 members)",
        "All Platinum Membership features",
        "Childcare services",
      ],
    },
  ];

  return (
    <div>
      <div className="grid gap-10 grid-cols-3  ">
        {gymShop.map((priceInfo) => (
          <PriceCard key={priceInfo.id} priceInfo={priceInfo}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
