import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useLocation, Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../../../constant/constant";
import axios from "axios";
import { Button } from "react-bootstrap";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1400,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [assign, setAssign] = useState(false);
  const [assigned, setAssigned] = useState({ status: false, value: {} });
  const [postUserEmail, setPostUserEmail] = useState("");
  const [postGroupEmail, setPostGroupEmail] = useState("");
  const [submisstionType, setSubmisstionType] = useState("");
  const [tableDetails, setTableDetails] = useState([]);
  const [reviewerEmail, setReviewerDetails] = useState([]);
  const [guestEmail, setGuestDetails] = useState([]);
  const [checked, setChecked] = useState([]);
  const [allPapers, setAllPapers] = useState([]);
  const [assignPaper, setAssignPaper] = useState([]);
  const [evaluatePaper, setEvaluatePaper] = useState([]);
  const [checkDisable, setCheckdisble] = useState(false);
  const [page, setPage] = React.useState(0);
  const [checkedCount, setCheckedCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  var index = 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [myadminheader] = useState({
    headers: {
      token: localStorage.getItem("Admintoken"),
    },
  });
  let detail = tableDetails;

  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const columns = [
    { id: "name", label: "Authors Name" },
    { id: "title", label: "Title" },
    {
      id: "keyword",
      label: "View Status",
      width: 10,
    },
    {
      id: "keyword",
      label: "Approval Status",
      width: 10,
    },
    {
      id: "keyword",
      label: "Reviewers",
      width: 10,
    },
  ];

  const columnsOne = [
    { id: "name", label: "Authors Name" },
    { id: "code", label: "Title" },
    {
      id: "keyword",
      label: "Keywords",
      width: 10,
    },
    { id: "code", label: "Abstract" },
    { id: "code", label: "Document" },
    { id: "code", label: "Poster" },
    {
      id: "population",
      label: "Assign Reviewers",
      width: 10,
    },
  ];
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function assignReviewer(e, p, g, s) {
    setAssign(true);
    setPostUserEmail(p);
    setPostGroupEmail(g);
    setSubmisstionType(s);
  }

  useEffect(() => {
    GetPro();

    axios
      .get(`${API_ENDPOINT}/admin/reviewer`, myadminheader)
      .then((response) => setReviewerDetails(response.data));

    axios
      .get(`${API_ENDPOINT}/admin/guest`, myadminheader)
      .then((response) => setGuestDetails(response.data));
  }, []);

  const GetPro = () => {
    axios
      .get(`${API_ENDPOINT}/admin/projects`, myadminheader)
      .then((response) => {
        let array = response.data.project.filter((e) => e.document !== "" || e.poster);
        let assign = [];
        let evaluate = [];
        array.forEach((e) => {
          if (e.reviewerApproval.length > 0) {
            evaluate.push(e);
          } else {
            assign.push(e);
          }
        });
        console.log(array);
        setAllPapers(array);
        setAssignPaper(assign);
        setEvaluatePaper(evaluate);
        setTableDetails(response.data.project.filter((e) => e.document !== ""));
      });
  };
  const handleCheck = (product) => {
    const isChecked = checked.includes(product);

    if (isChecked) {
      setCheckedCount(checkedCount - 1); // Decrease count when unchecked
    } else {
      setCheckedCount(checkedCount + 1); // Increase count when checked
    }
    if (checked.includes(product)) {
      setChecked(checked.filter((e) => e !== product));
    } else {
      setChecked([...checked, product]);
    }

    if (checked.length === 2) {
      setCheckdisble(true);
    }
  };

  function reviewerApproval(reviewerEmail, approval) {
    axios
      .post(
        `${API_ENDPOINT}/admin/reviewerApprove`,
        {
          reviewerEmail: reviewerEmail,
          acceptedByChair: approval,
        },
        myadminheader
      )
      .then(
        (response) => {
          console.log(response)
          if (response.data.message === "accepted") {
            alert("Reviewer accepted");
          } else if (response.data.message === "rejected") {
            alert("Reviewer rejected");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function Approval(approval) {
    axios
      .post(
        `${API_ENDPOINT}/admin/approve`,
        {
          approved: approval,
          email: assigned.value.email,
          submisstionType: assigned.value.submisstionType,
          title: assigned.value.title,
          paperID: assigned.value.paperID,
        },
        myadminheader
      )
      .then(
        (response) => {
          if (response.data.status) {
            GetPro();
            setAssigned((prevState) => ({
              ...prevState,
              status: false,
            }));
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function sendReview() {
    axios
      .post(
        `${API_ENDPOINT}/admin/add/reviewer`,
        {
          reviewers: checked,
          email: postUserEmail,
          submisstionType: submisstionType,
          title: assigned.value.title,
          paperID: assigned.value.paperID,
        },
        myadminheader
      )
      .then(
        (response) => {
          setAssign(false)
          setChecked([]);
          alert("reviewer added successfully");
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function sendReviewList(product) {
    if ((postUserEmail !== product.email) && (postGroupEmail !== product.email) && product.numberOfPapersAssigned < 3 && product.acceptedByChair) {
      index++;
      return (
        <>
          <div className="assign-card-con popup">
            <div className="assign-card">
              <li>
                <b>{product.firstName + " " + product.lastName}</b> (Reviewer {index}) (Number Of Papers Assigned: {product.numberOfPapersAssigned})
              </li>
              <input
                value={product.email}
                type="checkbox"
                checked={checked.includes(product)}
                onChange={() => handleCheck(product)}
                disabled={checked.includes(product) ? false : checked.length >= 3}
              />
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <div className="tabs-global">
      {assign ? (
        <div className="reviewer-popup">
          {reviewerEmail.data?.map((product) => {
            return (
              sendReviewList(product)
              // <>
              //   <div className="assign-card-con popup">
              //     <div className="assign-card">
              //       <li>
              //         <b>{product.firstName + " " + product.lastName}</b> (Reviewer {index})
              //       </li>
              //       <input
              //         value={product.email}
              //         type="checkbox"
              //         checked={checked.includes(product)}
              //         onChange={() => handleCheck(product)}
              //         disabled={checked.includes(product) ? false : checked.length >= 3}
              //       />
              //     </div>
              //   </div>
              // </>
            )
          })}
          <div className="wrap-btn">
            <button onClick={() => { setAssign(false); setChecked([]); }} className="withdraw">
              Close
            </button>
            <button className="assign-btn" onClick={sendReview}>
              Assign
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {assigned.status ? (
        <div className="reviewer-popup">
          {assigned.value.reviewers?.map((product) => (
            <>
              <div className="assign-card-con popup vertical-nav-bar">
                <div className="assign-card ">
                  <li>
                    Reviewer's Name : <b>{product.firstName + " " + product.lastName}</b>
                  </li>
                  {/* {product.email present in assigned.value.reviewerApproval} */}
                  {assigned.value.reviewerApproval.map((ele) => {
                    if (ele.email === product.email) {
                      return (
                        <button
                          onClick={() =>
                            navigate("/AdminReview", { state: ele })
                          }
                        >
                          Check Status
                        </button>
                      );
                    } else {
                      return <button disabled>Pending</button>;
                    }
                  })}
                </div>
              </div>
            </>
          ))}
          <div className="wrap-btn">
            <button
              className="withdraw"
              onClick={() =>
                setAssigned((prevState) => ({
                  ...prevState,
                  status: false,
                }))
              }
            >
              Close
            </button>
            <button className="reject" onClick={() => Approval("Rejected")}>
              Reject{" "}
            </button>
            <button className="submit" onClick={() => Approval("Approved")}>
              Accept{" "}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="tabs-contaniner">
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Assign Paper" {...a11yProps(0)} />
              <Tab label="Evaluated Paper" {...a11yProps(1)} />
              <Tab label="Reviewers List" {...a11yProps(2)} />
              <Tab label="Author List" {...a11yProps(3)} />
              <Tab label="Student List" {...a11yProps(4)} />
              <Tab label="Guest List" {...a11yProps(5)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div>
                <>
                  {/* <div className="assign-card-con">
                      <div className="assign-card">
                        <li>
                          Author's Name : <b>{product.firstName + " " + product.lastName}</b>
                        </li>
                        <li>
                          Title: <b>{product.title}</b>
                        </li>
                        <li>
                          {" "}
                          abstract :<b>{product.abstract}</b>
                        </li>
                        <button
                          onClick={(event) =>
                            assignReviewer(event, product.email)
                          }
                        >
                          Assign Reviewer
                        </button>
                      </div>
                    </div> */}
                  <div className="table-con">
                    <Paper
                      sx={{
                        width: "90%",
                        overflow: "hidden",
                        marginTop: "30px",
                      }}
                    >
                      <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="sticky table">
                          <TableHead>
                            <TableRow>
                              {columnsOne.map((column) => (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ minWidth: column.minWidth }}
                                >
                                  {column.label}
                                </TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {assignPaper
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row) => {
                                return (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}
                                  >
                                    <TableCell>{row.firstName + " " + row.lastName}</TableCell>
                                    {/* now keyword is array needed to be mapped  ebin*/}
                                    {/* <TableCell >{row.keyword}</TableCell> */}
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>
                                      {row.keyword.map((ele) => (
                                        ele.label !== "Other" ? <p>{ele.label}</p> : null
                                      ))}
                                      {row.otherKeyword !== "" ? <p>{row.otherKeyword}</p> : null}
                                    </TableCell>
                                    <TableCell>{row.abstract}</TableCell>
                                    <TableCell>
                                    { (row.document !== undefined)&&(row.document !== "") ? (
                                      <Link
                                        to={row.document }
                                        target="_blank"
                                        download
                                        className="download"
                                      >
                                        Download
                                      </Link>) : null
                                      }
                                    </TableCell>
                                    <TableCell>
                                      { (row.poster !== undefined)&&(row.poster !== "") ? (
                                        <Link
                                          to={row.poster}
                                          target="_blank"
                                          download
                                          className="download"
                                        >
                                          Download
                                        </Link>) : null
                                      }
                                    </TableCell>
                                    {/* <TableCell>
                                      {row.groupSubmission ? (
                                        <Button
                                          variant="success"
                                          style={{ pointerEvents: "none" }}
                                        >
                                          Yes
                                        </Button>
                                      ) : (
                                        <Button
                                          variant="warning"
                                          style={{ pointerEvents: "none" }}
                                        >
                                          No
                                        </Button>
                                      )}
                                    </TableCell> */}
                                    <TableCell>
                                      {" "}
                                      <button
                                        className="assign-btn"
                                        onClick={(event) =>
                                          assignReviewer(event, row.email, row.groupEmail, row.submisstionType)
                                        }
                                      >
                                        Assign Reviewer
                                      </button>
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={assignPaper.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Paper>
                  </div>
                </>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div>
                <>
                  {/* <div className="assign-card-con">
                      <div className="assign-card">
                        <li>{product.id}</li>
                        <li>
                          Reviewer's Name : <b>{product.firstName + " " + product.lastName}</b>
                        </li>
                        <span>
                          {" "}
                          Check Review Status{" "}
                          <button
                            className="view-btn"
                            onClick={() =>
                              setAssigned((prevState) => ({
                                ...prevState,
                                status: true,
                                value: product,
                              }))
                            }
                          >
                            View111
                          </button>
                        </span>

                        <div>
                          <button className="approve-btn">Approve</button>
                          <button className="reject-btn">Reject</button>
                        </div>
                      </div>
                    </div> */}

                  <div className="table-con">
                    <Paper
                      sx={{
                        width: "70%",
                        overflow: "hidden",
                        marginTop: "30px",
                      }}
                    >
                      <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                          <TableHead>
                            <TableRow>
                              {columns.map((column) => (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ minWidth: column.minWidth }}
                                >
                                  {column.label}
                                </TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {evaluatePaper
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row) => {
                                return (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}
                                  >
                                    <TableCell>{row.firstName + " " + row.lastName}</TableCell>
                                    {/* now keyword is array needed to be mapped ebin*/}

                                    {/* <TableCell >{row.keyword}</TableCell> */}
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>
                                      {" "}
                                      <button
                                        className="view-btn"
                                        onClick={() =>
                                          setAssigned((prevState) => ({
                                            ...prevState,
                                            status: true,
                                            value: row,
                                          }))
                                        }
                                      >
                                        View
                                      </button>
                                    </TableCell>
                                    <TableCell>
                                      <li>
                                        {row.approved === "Pending" ? (
                                          <p style={{ color: "orange" }}>
                                            Pending
                                          </p>
                                        ) : row.approved === "Approved" ? (
                                          <p style={{ color: "Green" }}>
                                            Approved
                                          </p>
                                        ) : (
                                          <p style={{ color: "Red" }}>
                                            Rejected
                                          </p>
                                        )}
                                      </li>
                                    </TableCell>
                                    <TableCell>
                                      {row.reviewers.map((ele) => (
                                        <p>
                                          {ele.firstName + " " + ele.lastName}, {ele.email}
                                        </p>
                                      ))}
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={evaluatePaper.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Paper>
                  </div>
                </>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <div>
                <div className="assign-card-con popupnew">
                  <div className="assign-cardNew">
                    <li>
                      <b>Reviewer's Name</b>
                    </li>

                    <li>
                      <b>Reviewer's Email</b>
                    </li>

                    <li>
                      <b>Reviewer's Area Of Interest</b>
                    </li>

                    <li>
                      <b>Reviewer's Acceptance</b>
                    </li>
                  </div>
                </div>
                {reviewerEmail.data?.map((product) => (
                  <>
                    <div className="assign-card-con popupnew">
                      <div className="assign-cardNew">
                        <li>
                          {product.firstName + " " + product.lastName}
                        </li>

                        <li>
                          {product.email}
                        </li>

                        <li>
                          {product.areaOfInterest}
                        </li>

                        <li>
                          {product.acceptedByChair ? <p>Accpeted as reviewer</p> 
                          : 
                          <>
                            <button className="reject" onClick={() => reviewerApproval(product.email, false)}>Reject{" "}</button>
                            <button className="submit" onClick={() => reviewerApproval(product.email, true)}>Accept{" "}</button>
                          </>}
                        </li>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <div>
                <div className="assign-card-con popupnew">
                  <div className="assign-cardNew">
                    <li>
                      <b>Author's Name</b>
                    </li>

                    <li>
                      <b>Author's Email</b>
                    </li>

                    <li>
                      <b>Author's Area Of Interest</b>
                    </li>

                    <li>
                      <b>Author's Payment Status</b>
                    </li>
                  </div>
                </div>
                {allPapers.map((author) => ( author.submisstionType === "user" && author.approved === "Approved" ? (
                  <>
                    <div className="assign-card-con popupnew">
                      <div className="assign-cardNew">
                        <li>
                          {author.firstName + " " + author.lastName}
                        </li>

                        <li>
                          {author.email}
                        </li>

                        <li>
                          {author.areaOfInterest}
                        </li>

                        <li>
                          {author.payementStatus}
                        </li>
                      </div>
                    </div>
                  </>
                ) : null))}
              </div>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              <div>
                <div className="assign-card-con popupnew">
                  <div className="assign-cardNew">
                    <li>
                      <b>Student's Name</b>
                    </li>

                    <li>
                      <b>Student's Email</b>
                    </li>

                    <li>
                      <b>Student's Area Of Interest</b>
                    </li>

                    <li>
                      <b>Student's Payment Status</b>
                    </li>
                  </div>
                </div>
                {allPapers.map((student) => ( student.submisstionType === "student" && student.approved === "Approved" ? (
                  <>
                    <div className="assign-card-con popupnew">
                      <div className="assign-cardNew">
                        <li>
                          {student.firstName + " " + student.lastName}
                        </li>

                        <li>
                          {student.email}
                        </li>

                        <li>
                          {student.areaOfInterest}
                        </li>

                        <li>
                          {student.payementStatus}
                        </li>
                      </div>
                    </div>
                  </>
                ) : null ))}
              </div>
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
              <div>
                <div className="assign-card-con popupnew">
                  <div className="assign-cardNew">
                    <li>
                      <b>Guest's Name</b>
                    </li>

                    <li>
                      <b>Guest's Email</b>
                    </li>

                    <li>
                      <b>Guest's Phone No</b>
                    </li>
                  </div>
                </div>
                {guestEmail.data?.map((product) => (
                  <>
                    <div className="assign-card-con popupnew">
                      <div className="assign-cardNew">
                        <li>
                          {product.FirstName + " " + product.LastName}
                        </li>

                        <li>
                          {product.Email}
                        </li>

                        <li>
                          {product.Phone}
                        </li>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}
