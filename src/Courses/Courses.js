import "./Courses.css";
export default function Courses() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <br></br> &nbsp;
        <h1>Courses</h1>
        <div class="col mt-5">
          <div class="card" style={{ width: "20rem",height:"25rem" }}>
            <img style={{height:"15rem"}} src="https://bprint.com/wp-content/uploads/2019/02/5-Ways-Your-Company-Can-Benefit-from-Working-with-a-Graphic-Designer-1080x675.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Graphic Design</h5>
              <p class="card-text">
                Learn from basics to Advance of Graphics Design
              </p>
              <p>
                <i class="fa-solid fa-database"></i> 5 chapters &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;<i class="fa-regular fa-clock"></i>{" "}
                3hr 30min
              </p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card" style={{ width: "20rem" ,height:"25rem"}}>
            <img style={{height:"15rem"}} src="webimage.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Web Development</h5>
              <p class="card-text">
                Learn complete MERN stack with 3 major projects.
              </p>
              <p>
                <i class="fa-solid fa-database"></i> 12 chapters &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;<i class="fa-regular fa-clock"></i>{" "}
                50hr 30min
              </p>
            </div>
          </div>
        </div>
        <div class="col mt-5">
          <div class="card" style={{ width: "20rem",height:"25rem" }}>
            <img style={{height:"15rem"}} src="marketing.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Digital Marketing</h5>
              <p class="card-text">Excell in marketing</p>
              <p>
                <i class="fa-solid fa-database"></i> 8 chapters &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;<i class="fa-regular fa-clock"></i>{" "}
                7hr
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div class="col">
          <div class="card" style={{ width: "20rem",height:"25rem" }}>
            <img style={{height:"15rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IXRVnX9nnC8LbJLnz3Nw7cewyzKY1pAgvg&s" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Social Media Manager</h5>
              <p class="card-text">
                Learn social media platform`s content strategies.
              </p>
              <p>
                <i class="fa-solid fa-database"></i> 5 chapters &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;<i class="fa-regular fa-clock"></i>{" "}
                2hr 30min
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "20rem",height:"25rem" }}>
            <img style={{height:"15rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoio1tDDelNpnh6HC4YlJDgwyn6oe0AbiSQ&s" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Editor</h5>
              <p class="card-text">
                Learn complete MERN stack with 3 major projects.
              </p>
              <p>
                <i class="fa-solid fa-database"></i> 8 chapters &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;<i class="fa-regular fa-clock"></i>{" "}
                7hr
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "20rem",height:"25rem" }}>
            <img style={{height:"15rem"}} src="https://www.milestone.inc/wp-content/uploads/2024/06/accounting-for-startups-scaled.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Accounting</h5>
              <p class="card-text">Learn recording and summarizing business and financial transactions</p>
              <p>
                <i class="fa-solid fa-database"></i> 5 chapters &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;<i class="fa-regular fa-clock"></i>{" "}
                5hr
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
