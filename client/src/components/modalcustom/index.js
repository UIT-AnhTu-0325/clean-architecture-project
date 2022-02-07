import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import InputTitleLeft from "../ui/input_title_left";

/**
 * @author
 * @function ModalCustom
 **/

const ModalCustom = (props) => {
  const employee = props.employeeData;

  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
      okText="Save"
    >
      <InputTitleLeft
        title="Name"
        value={employee?.name}
        placeholder={``}
        onChange={(e) => {
          //setEmployee({ ...employee, name: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Address"
        value={employee?.address}
        placeholder={``}
        onChange={(e) => {
          //setEmployee({ ...employee, address: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Email"
        value={employee?.email}
        placeholder={``}
        onChange={(e) => {
          //setEmployee({ ...employee, email: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Phone Number"
        value={employee?.phoneNumber}
        placeholder={``}
        onChange={(e) => {
          //setEmployee({ ...employee, phoneNumber: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Gender"
        value={employee?.gender}
        placeholder={``}
        onChange={(e) => {
          //setEmployee({ ...employee, gender: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Role"
        value={employee?.role}
        placeholder={``}
        onChange={(e) => {
          //setEmployee({ ...employee, role: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Dob"
        value={employee?.dob}
        placeholder={``}
        onChange={(e) => {
          //setEmployee({ ...employee, dob: e.target.value });
          //checkEditData();
        }}
      />
    </Modal>
  );
};

ModalCustom.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  employeeData: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    gender: PropTypes.string,
    role: PropTypes.string,
    dob: PropTypes.string,
  }),
};

export default ModalCustom;
