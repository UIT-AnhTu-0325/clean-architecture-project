import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../../actions/employee.action";
import { Button, Table, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import "./main.css";
import ModalCustom from "../../components/modalcustom";

/**
 * @author
 * @function Homepage
 **/

export const Homepage = (props) => {
  const state_employees = useSelector((state) => state.employee.employees);

  const [role, setRole] = useState("Admin");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Dob",
      dataIndex: "dob",
      key: "dob",
      sorter: (a, b) =>
        moment(a.dob, "DD/MM/YYYY").unix() - moment(b.dob, "DD/MM/YYYY").unix(),
    },
    {
      title: "",
      dataIndex: "idEmployee",
      width: "10%",
      align: "center",
      render: () => (
        <div>
          {role === "Admin" && (
            <div className="title-of-table">
              <Tooltip title="View details/Edit">
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={handleModalShow}
                />
              </Tooltip>
              <Tooltip className="tooltip-del" title="Delete">
                <Button danger icon={<DeleteOutlined />} onClick={() => {}} />
              </Tooltip>
            </div>
          )}
        </div>
      ),
    },
  ];

  const onPageChange = (page, pageSize) => {
    console.log(pageSize);
  };

  const handleModalShow = () => {
    setSelectedEmployee({
      name: "a",
      address: "a",
      email: "a",
      phoneNumber: "a",
      gender: "a",
      role: "a",
      dob: "a",
    });
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const setData = (employee) => {
    setSelectedEmployee(employee);
    //Not update immediate, Why ??
    //console.log(selectedEmployee);
    //console.log(employee);
  };

  return (
    <div>
      <div className="card">
        <div className="card__header">
          <h3>List Employee</h3>
        </div>
        <div className="card__body">
          <Table
            dataSource={state_employees}
            columns={columns}
            scroll={{ y: 240 }}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ["10", "15", "20"],
              onChange: onPageChange,
            }}
          />
        </div>
        <div className="card__footer"></div>
      </div>
      <ModalCustom
        title="Edit"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalClose}
        employeeData={selectedEmployee}
        setParentData={setData}
      ></ModalCustom>
    </div>
  );
};
