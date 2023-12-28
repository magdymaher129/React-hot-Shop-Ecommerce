import SingleCategory from "./SingleCategory";
import { useCat } from "../hooks/useCat";
import { useContext, useState } from "react";
import storeContext from "../../../data/store";

function AllCategories() {
  // fetch data by using hook useCat

  const {  cat ,loading,error} = useCat();



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <form>
      {cat &&
        cat.map((item) => (
          <SingleCategory
            title={item.attributes.title}
            id={item.id}
            key={item.id}
          
          />
        ))}
    </form>
  );
}

export default AllCategories;
