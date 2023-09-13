import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "option1", label: "Trending" },
  { value: "option2", label: "New" },
];

const MySelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div >
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        id="select-box"
      />
    </div>
  );
};

export default MySelectComponent;
