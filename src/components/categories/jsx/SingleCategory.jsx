/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import storeContext from "../../../data/store";

/**
 * Renders a checkbox input and a label for a single category.
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the category.
 * @param {string} props.title - The title of the category.
 * @param {function} props.handleCatChange - A function to handle changes when the checkbox is checked or unchecked.
 * @returns {JSX.Element} - The rendered JSX elements.
 */
function SingleCategory(props) {
  const { id, title } = props;
  const { selectedcats, setSelectedcats } = useContext(storeContext);

  const handleCategory = (e, id) => {
    const ischecked = e.target.checked;
    if (ischecked) return setSelectedcats([...selectedcats, id]);
    if (!ischecked)
      return setSelectedcats(
        selectedcats.filter((selectedcats) => selectedcats !== id),
      );
    console.log(selectedcats);
  };

  

  return (
    <div>
      <input
        type='checkbox'
        // data-category={id}
       style={{display:"inline-block"}}
        value={title}
        id='cat'
        name={title}
        onChange={(e) => handleCategory(e, id)}
      />
      <label
        htmlFor={id}
        className='checkbox white capital ps-2'
        style={{ width: "auto" }}
      >
        {title}
      </label>
      <br />
    </div>
  );
}

export default SingleCategory;
