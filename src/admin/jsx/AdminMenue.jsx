import styles from"../css/admin.module.css";//shrink
import user from "/img/user.webp";
// import {BsFillHouseDoorFill} from  "react-icons/bs"
// import {FaUserGroup} from  "react-icons/fa"
import {FaGear, FaStar, FaUserGroup} from "react-icons/fa6"
import {BsFillHouseDoorFill, BsTable} from "react-icons/bs"
import {BiSolidPencil, BiSolidPieChartAlt} from "react-icons/bi"

import {FaSignOutAlt} from "react-icons/fa"
import AdminTop from "./AdminTop";
import PageFooter from "../../page components/footer/jsx/PageFooter";
import Paginate from "../../components/pagination/Paginate";

function AdminMenue() {
  return (

    <div className={styles.DashMenu}>
      <ul>
        <li className={styles.profile}>
          <div className={styles.imgBox}>
            <img src={user} alt='user' />
          </div>
          <p>Admin</p>
        </li>

        <li>
          <a href='#'>
            {/* <i className='fa-solid fa-house'></i> */}
            <BsFillHouseDoorFill/>
            {/* <BsFillHouseDoorFill/> */}
            <p>Dboard</p>
          </a>
        </li>
        <li>
          <a href='#'>
       
            <FaUserGroup />
            <p>clients</p>
          </a>
        </li>
        <li>
          <a href='#'>
          <BsTable/>
            <p>products</p>
          </a>
        </li>
        <li>
          <a href='#'>
            {/* <i className='fa-solid fa-chart-pie'></i> */}
            <BiSolidPieChartAlt/>
   
            <p>charts</p>
          </a>
        </li>
        <li>
          <a href='#'>
            {/* <i className='fa-solid fa-pen'></i> */}
            <BiSolidPencil/>
            <p>posts</p>
          </a>
        </li>
        <li>
          <a href='#'>

            <FaStar/>
            <p>favorite</p>
          </a>
        </li>
        <li>
          <a href='#'>
          <FaGear/>
            <p>settings</p>
          </a>
        </li>
        <li className={styles.logOut}>
          <a href='#'>
        
            <FaSignOutAlt />
            <p>log out</p>
          </a>
        </li>
      </ul>

    </div>

  );
}

export default AdminMenue;
