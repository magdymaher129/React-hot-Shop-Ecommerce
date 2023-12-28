import AllCategories from "../components/categories/jsx/AllCategories";
import AllColors from "../components/colors/jsx/AllColors";
import AllSizes from "../components/sizes/jsx/AllSizes";
import PriceSort from "../components/sorts/jsx/PriceSort";

function SideBar() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "160px" }}>
      <div
        style={{
        
          padding: "8px",
        }}
      >
        
        
          <PriceSort />
      
        <div>
          <p style={{ color: "brown", fontSize: "18px" }}> category</p>
          <AllCategories />
        </div>
        <div>
          <p style={{ color: "brown", fontSize: "18px" }}> color</p>
          <AllColors />
        </div>
        <div>
          <p style={{ color: "brown", fontSize: "18px" }}> size</p>
          <AllSizes />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SideBar;
