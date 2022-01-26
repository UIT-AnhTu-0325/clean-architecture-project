import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../../actions/employee.action";
import { Link } from "react-router-dom";
import { Table } from "../../components/Table/Table";
import "./main.css";
import swal from "sweetalert";
import { SelectBox } from "../../components/UI/select/SelectBox";
import { InputTitleLeft } from "../../components/UI/inputTitleLeft/InputTitleLeft";
/**
 * @author
 * @function Homepage
 **/

export const Homepage = (props) => {
  const state_employees = useSelector((state) => state.employee.employees);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);

  const initEmployee = () => {
    return {
      id: "",
      name: "",
      address: "",
      email: "",
      phoneNumber: "",
      gender: "",
      role: "",
      dob: "",
      createdAt: "",
      updatedAt: "",
    };
  };
  const [employee, setEmployee] = useState(initEmployee);

  const [modalShow, setModalShow] = useState(false);
  const [editData, setEditData] = useState(false);

  const checkEditData = () => {
    if (
      employee.name &&
      employee.address &&
      employee.email &&
      employee.phoneNumber &&
      employee.gender &&
      employee.role &&
      employee.dob
    ) {
      setEditData(true);
    } else {
      setEditData(false);
    }
  };

  const handleModalShow = (employee = []) => {
    setEmployee(employee);
    setModalShow(true);
  };

  const handleModalSave = () => {
    const form = employee;
    //to edit
    //dispatch(editRoute(form));
    swal({
      title: "Sửa thành công",
      text: "Bạn đã sửa thành công",
      icon: "success",
      button: "OK",
    });
    setEmployee(initEmployee);
    setModalShow(false);
    resetCss();
  };

  const handleModalClose = () => {
    setEmployee(initEmployee);
    setModalShow(false);
    resetCss();
  };

  const delEmployee = (selected) => {
    var form = selected;
    swal({
      title: "Bạn chắc chắn xóa",
      text: "Bạn có chắc sẽ xóa không",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Xóa thành công!", {
          icon: "success",
        });
        //to delete
        //dispatch(editRoute(form));
      } else {
        swal("Chưa bị xóa!");
      }
    });
  };

  const resetCss = () => {
    setEditData(false);
  };

  const users = {
    header: [
      "No",
      "Name",
      "Address",
      "Email",
      "Phone Number",
      "Gender",
      "Role",
      "Dob",
      "Options",
    ],
    body: [],
  };
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
  };
  const renderEmployees = (employees) => {
    let myEmployees = [];
    for (let i = 1; i <= employees.length; i++) {
      let emp = employees[i - 1];
      myEmployees.push(
        <tr>
          <td>{i}</td>
          <td>{emp.name}</td>
          <td>{emp.address}</td>
          <td>{emp.email}</td>
          <td>{emp.phoneNumber}</td>
          <td>{emp.gender}</td>
          <td>{emp.role}</td>
          <td>{emp.dob}</td>
          {JSON.parse(localStorage.getItem("user")).role === "Admin" ? (
            <td>
              <button
                className="edit"
                onClick={() => {
                  handleModalShow(emp);
                }}
              >
                Sửa
              </button>
              <button
                className="delete"
                onClick={() => {
                  delEmployee(emp);
                }}
              >
                Xóa
              </button>
            </td>
          ) : (
            <></>
          )}
        </tr>
      );
    }
    return myEmployees;
  };

  return (
    <div>
      <div
        className={
          modalShow ? "add-modal__wrapper active" : "add-modal__wrapper"
        }
      >
        <div className={modalShow ? "add-modal active" : "add-modal"}>
          <div className="add-modal__header">Edit Information</div>

          <div className="add-modal__body">
            <div className="input-enterprise-name">
              <InputTitleLeft
                title="Name"
                value={employee.name}
                placeholder={``}
                onChange={(e) => {
                  setEmployee({ ...employee, name: e.target.value });
                  checkEditData();
                }}
              />
              <InputTitleLeft
                title="Address"
                value={employee.address}
                placeholder={``}
                onChange={(e) => {
                  setEmployee({ ...employee, address: e.target.value });
                  checkEditData();
                }}
              />
              <InputTitleLeft
                title="Email"
                value={employee.email}
                placeholder={``}
                onChange={(e) => {
                  setEmployee({ ...employee, email: e.target.value });
                  checkEditData();
                }}
              />
              <InputTitleLeft
                title="Phone Number"
                value={employee.phoneNumber}
                placeholder={``}
                onChange={(e) => {
                  setEmployee({ ...employee, phoneNumber: e.target.value });
                  checkEditData();
                }}
              />
              <InputTitleLeft
                title="Gender"
                value={employee.gender}
                placeholder={``}
                onChange={(e) => {
                  setEmployee({ ...employee, gender: e.target.value });
                  checkEditData();
                }}
              />
              <InputTitleLeft
                title="Role"
                value={employee.role}
                placeholder={``}
                onChange={(e) => {
                  setEmployee({ ...employee, role: e.target.value });
                  checkEditData();
                }}
              />
              <InputTitleLeft
                title="Dob"
                value={employee.dob}
                placeholder={``}
                onChange={(e) => {
                  setEmployee({ ...employee, dob: e.target.value });
                  checkEditData();
                }}
              />
            </div>
          </div>

          <div className="add-modal__footer">
            <button className="btn-cancel" onClick={handleModalClose}>
              {" "}
              Hủy bỏ
            </button>
            <button
              className="btn-save"
              disabled={!editData}
              onClick={handleModalSave}
            >
              {" "}
              Lưu lại
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card__header">
          <h3>List Employee</h3>
          {/* <div className="ui-search">
        <input
          ref={inputEl}
          type="text"
          placeholder="Search Here"
          className="prompt"
          value={searchTerm}
          onChange={getSearchTerm}
        />
      </div> */}
        </div>

        <div className="card__body">
          <Table
            headData={users.header}
            renderHead={(item, ind) => renderHead(item, ind)}
            render2Body={() =>
              // renderUsers(
              //   searchTerm.length < 1 ? listUser.listAdmin : searchResults
              // ).length > 0
              //   ? renderUsers(
              //       searchTerm.length < 1 ? listUser.listAdmin : searchResults
              //     )
              //   : "Không tìm thấy kết quả"
              renderEmployees(state_employees)
            }
          />
        </div>
        <div className="card__footer"></div>
      </div>
    </div>
  );
};
