import '../mainPage/App.css';
export default function Category() {
  return (
    <div class="container mb-5">
      <h2>Popular Category</h2>
      <br />
      <br />
      <div class="row">
        <div class="col-3">
          <a href="graphics" class="category">
            <p >
              <i class="fa-solid fa-pen-nib icons"></i>  &nbsp;Graphics & Design
            </p>
          </a><br></br>

          <a href="video" class="category">
            <p>
              <i class="fa-solid fa-video icons"></i>  &nbsp;Video & Animation
            </p>
          </a>
        </div>
        <div class="col-3">
          <a href="marketing"class="category">
            <p>
              <i class="fa-solid fa-bullhorn icons"></i> &nbsp; Digital Marketing
            </p>
          </a><br></br>
          <a href="accounting"class="category">
            <p>
              <i class="fa-solid fa-money-check-dollar icons"></i> &nbsp; Accounting
            </p>
          </a>
        </div>
        <div class="col-3">
          <a href="al/ml"class="category">
            <p>
              <i class="fa-solid fa-code icons"></i> &nbsp; AL / ML
            </p>
          </a><br></br>
          <a href="webdev"class="category">
            <p>
              <i class="fa-solid fa-display icons"></i> &nbsp; Web Development
            </p>
          </a>
        </div>
        <div class="col-3">
          <a href="finance"class="category">
            <p>
              <i class="fa-solid fa-chart-simple icons"></i> &nbsp; Account & Finance
            </p>
          </a><br></br>
          <a href="content&creator"class="category">
            <p>
              <i class="fa-solid fa-wand-magic-sparkles icons"></i> &nbsp; Content Creator
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
