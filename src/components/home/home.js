import Layout from '../../layout/layout'
import React from 'react'
import { useState } from 'react'

export const Home = () => {
  const [marksList, setMarksList] = useState([])

  return (
    <Layout>
      <div className={"container"}>
        <div className={"container-widget"}>
          <div className={"students_marks_container"}>
            <div><h3 className={"content-heading"}>Products</h3></div>
            <div className={"table-btn-container d-flex justify-content-end pb-3"}>
              <div className={"dropdown"}>
                {/* <button className={"btn btn-secondary dropdown-toggle marks-dropdown-btn"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Stream
                </button> */}
                <ul className="dropdown-menu dropdown-menu-dark">
                  {/* <li><a className={"dropdown-item cursor-pointer"} onClick={() => setMarksList(filterDataByKey(marksListAll, "All"))}>All</a></li> */}
                  {/* {uniq(pluck(marksListAll, "subject")).map((item, index) => <li><a className={"dropdown-item cursor-pointer"} key={index + item} onClick={() => setMarksList(filterDataByKey(marksListAll, item))}>{item.replace("_", " ")}</a></li>)} */}

                </ul>
              </div>

              {/*  <button type="button" className={"btn btn-secondary students-dropdown-btn"}*/}
              {/*    data-bs-toggle="modal" data-bs-target="#exampleModal"*/}
              {/*    onClick={() => setModalType("Add")}>*/}
              {/*  <FeatherIcon className={"action-icons text-white"} icon={"plus"}/>*/}
              {/*    Add*/}
              {/*</button>*/}
              <button type="button" className={"btn btn-secondary students-dropdown-btn"}
                onClick={() => {
                  // setModalType("Add");
                  // setModalShow(true)
                }}>
                {/* <FeatherIcon className={"action-icons text-white"} icon={"plus"} /> */}
                Add
              </button>
              <form  >
                <input accept=".xlsx" id="file-upload" type="file" className={"d-none"}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    // uploadExcelFile(file);
                  }}
                /></form>
              {/*<label htmlFor={"file-upload"} className={"btn btn-secondary students-dropdown-btn"} type="button"*/}
              {/*        aria-expanded="false">*/}
              {/*  <FeatherIcon className={"action-icons text-white"} icon={"download"} />*/}
              {/*  Import Data*/}
              {/*</label>*/}
              {/* <button className={"btn btn-secondary students-dropdown-btn"} type="button"
                aria-expanded="false" onClick={""}>
                Export Data
              </button> */}

            </div>
          </div>
          <div className={"table-container"}>
            <table className={"table table-hover table-striped"} >
              <thead className={"top-0 position-sticky h-45"}>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Reg.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Marks</th>
                  <th scope="col">Rank</th>
                  <th scope="col">Date of Exam</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {marksList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((data, index) => (<tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.nicNo}</td>
                  <td>{data.name}</td>
                  <td>{data.subject.replace("_", " ")}</td>
                  <td>{data.marks}</td>
                  <td>{data.rank}</td>
                  <td>{data.date?.slice(0, 10)}</td>
                  <td>
                    {/*<FeatherIcon className={"action-icons"} icon={"eye"} data-bs-toggle="modal"*/}
                    {/*               data-bs-target="#exampleModal" onClick={() => setModalType("View")}/>*/}
                    {/* <FeatherIcon className={"action-icons"} icon={"edit"}
                             onClick={() => {
                              //  setModalType("Edit");
                              //  setModalShow(true)
                              //  setSelectedMarks(data)
                             }}/>

                <FeatherIcon className={"action-icons text-red"} icon={"trash-2"} onClick={() => handleDelete(data._id)}/> */}
                  </td>
                </tr>))}
              </tbody>
            </table>
            {marksList.length === 0 && <div className={"text-center py-5 fw-bold"}>No Marks Data Found,Please Add</div>}

          </div>
        </div>
      </div>
      </Layout>
  )
}
