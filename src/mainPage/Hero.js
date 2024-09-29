import "../mainPage/main.css";

export default function Hero() {
  return (
    <div class="container mb-5">
      <div class="row">
        <div class="col-6">
          <div>
            <div>
              {/* <h5 style={{color:"black"}} class="card-title">Become a Freelancer</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Register Now <i class="fa-solid fa-arrow-right"></i>
              </a> */}
              <a href="/freelancer">
                <img class="freelancerimg" src="freelancerimg.png"></img>
              </a>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div>
            <div>
              {/* <h5 style={{color:"black"}} class="card-title">Become a Employer</h5>
              <p class="card-text" classname="g">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
              Register Now <i class="fa-solid fa-arrow-right"></i>
              </a> */}
              <a href="/employer">
                <img class="employerimg" src="employerimg.png"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
