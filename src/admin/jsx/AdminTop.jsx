import styles from"../css/admin.module.css";//shrink

function AdminTop() {
  return (
    <div >
        

    <div className="title-info">
                <p>info</p>
                <i className="fa-solid fa-chart-bar"></i>
            </div>

            {/*  data info   */}
            <div className="data-info">

                <div className="box">
                    <i className="fa-solid fa-user"></i>
                    <div className="data">
                        <p>users</p>
                        <span>234</span>
                    </div>
                </div>

                <div className="box">
                    <i className="fa-solid fa-pen"></i>
                    <div className="data">
                        <p>posts</p>
                        <span>3044</span>
                    </div>
                </div>


                <div className="box">
                    <i className="fa-solid fa-table"></i>
                    <div className="data">
                        <p>products</p>
                        <span>675</span>
                    </div>
                </div>


                <div className="box">
                    <i className="fa-solid fa-dollar"></i>
                    <div className="data">
                        <p>revenue</p>
                        <span>1298</span>
                    </div>
                </div>



            </div>
           {/* data info   */}
            <div className="title-info">
                <p>users</p>
                <i className="fa-solid fa-user"></i>
            </div>


    </div>
  )
}

export default AdminTop