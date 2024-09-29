import "./Profile.css";
export default function Profile() {
  return (
    <div>
      <div class="row">
        <div
          class="profile"
          style={{ backgroundColor: "grey", width: "20rem" }}
        >
          <h3>Profile</h3>
          <div className="profile-info">
            <img
              class="mt-5 "
              src="https://maacchandigarh.com/wp-content/uploads/2024/03/Graphic_designi_new.png"
              style={{ borderRadius: "50%", width: "70%" }}
            />
            <h4 className="mt-3">Anushka</h4>
            <h6>Graphic Designer</h6>
          </div>

          <h6 style={{ marginLeft: "6rem", fontSize: "1.1rem" }}>
            Rating 4{" "}
            <i class="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          </h6>
          <h5 style={{ marginLeft: "6rem" }}>Portfolio</h5>
          <h5 style={{ marginLeft: "6rem" }}>Resume</h5>
          <br></br>
          <br></br>
          <br></br>
          <div className="links">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div class="col">
          <h3>Projects</h3>
        </div>
      </div>
    </div>
  );
}
