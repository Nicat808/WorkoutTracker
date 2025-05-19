import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
const Dropdown = ({ selectedValue, listValues, onChangeHandler }) => {
  const [isDropdownItemsVisible, setIsDropdownItemsVisible] = useState(false);
  return (
    <div
      className={`dropdown ${isDropdownItemsVisible && "active"}`}
      onClick={() => setIsDropdownItemsVisible(!isDropdownItemsVisible)}
    >
      <div className="selected-value">{selectedValue}</div>
      <div className="dropdown-icon">
        {isDropdownItemsVisible ? (
          <ArrowDown size={18} absoluteStrokeWidth />
        ) : (
          <ArrowUp size={18} absoluteStrokeWidth />
        )}
      </div>

      {isDropdownItemsVisible && (
        <div className="dropdown-items-wrapper">
          {listValues.map((list, i) => (
            <div
              key={i}
              className={`dropdown-item ${selectedValue === list && "active"}`}
              onClick={() => {
                onChangeHandler(list);
                setIsDropdownItemsVisible(false);
              }}
            >
              {list}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
