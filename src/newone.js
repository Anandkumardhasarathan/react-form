import { TextField } from "@mui/material";

const Formpage=()=>{
    return(
        <>
        <div>
  <title>Event Proposal</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title" style={{color: 'rgb(116, 17, 146)'}}>STUDENT MOTIVATION FOR PAPER PRESENTATION, PROJECT SUBMISSION AND OTHER CONTEST</h5>
          </div>
          <div className="card-body">
            <form onsubmit="return validate()" name="sesta">
              <div className="form-group">
                <label htmlFor="facultyName" id="academic_year">Academric Year</label>
                <select className="form-control" name="ay">
                  <option>Select the Year</option>
                  <option>2022-23</option>
                  <option>2023-24</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="facultyName" id="Semester">Semester</label>
                <select className="form-control" name="sem">
                  <option>Select the Semester</option>
                  <option>ODD</option>
                  <option>EVEN</option>
                </select>
              </div>
              {/* <div className="form-group">
                <label>Name of the Faculty<span id="fnerror" color="danger" /></label>
                <input type="text" className="form-control" name="facname" id="facultyName" placeholder="Enter the faculty name" />
              </div> */}

              <div>
                {/* <label>Name of the faculty</label> n */}
                <TextField id="outlined-basic" label="Faculty Name" variant="outlined" />
              </div>

              <div className="form-group">
                <label>Name Of the Student <span id="stuname" color="danger" /></label>
                <input type="text" className="form-control" name="stuname" id="studentName" placeholder="Enter the student name" />
              </div>
              <div className="form-group">
                <label>Contest</label>
                <input type="text" className="form-control" id="contest" name="con" placeholder="Enter the Contest Name" />
              </div>
              <div className="form-group">
                <label>Paper Presentation</label>
                <input type="text" className="form-control" id="paperPresentation" name="pp" placeholder="Enter the Topic Name" />
              </div>
              <div className="form-group">
                <label>Project Presentation</label>
                <input type="text" className="form-control" id="projectPresentation" name="pro" placeholder="Enter the Topic Name" />
              </div>
              <div className="form-group">
                <label>Other Contest</label>
                <input type="text" className="form-control" id="othercontest" name="formgroup" placeholder="Enter the Topic Name" />
              </div>
              <div className="form-group">
                <label>
                  Date
                </label>
                <input type="date" className="form-control" id="date" name="date" placeholder="Date" />
              </div>
              <div className="form-group">
                <label>No. of Beneficiaries</label>
                <input type="text" className="form-control" id="noofBeneficiaries" name="nob" placeholder="Enter the Number" />
              </div>
              <div className="m-2 row justify-content-around">
                <button type="submit" className="btn btn-primary" value="sesta" onclick="return validate()">Submit</button>
                <button type="reset" className="btn btn-danger">Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Formpage;