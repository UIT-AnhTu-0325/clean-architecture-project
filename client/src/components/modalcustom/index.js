import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import InputTitleLeft from "../ui/input_title_left";

/**
 * @author
 * @function ModalCustom
 **/

const ModalCustom = (props) => {
  const [employee, setEmployee] = useState();

  useEffect(() => {
    setEmployee(props.employeeData);
  }, [props.employeeData]);

  const handleModalOk = () => {
    props.setParentData(employee);
    props.onOk();
  };

  const handleModalClose = () => {
    props.onCancel();
  };

  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={handleModalOk}
      onCancel={handleModalClose}
      okText="Save"
    >
      <InputTitleLeft
        title="Name"
        value={employee?.name}
        placeholder={``}
        onChange={(e) => {
          setEmployee({ ...employee, name: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Address"
        value={employee?.address}
        placeholder={``}
        onChange={(e) => {
          setEmployee({ ...employee, address: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Email"
        value={employee?.email}
        placeholder={``}
        onChange={(e) => {
          setEmployee({ ...employee, email: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Phone Number"
        value={employee?.phoneNumber}
        placeholder={``}
        onChange={(e) => {
          setEmployee({ ...employee, phoneNumber: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Gender"
        value={employee?.gender}
        placeholder={``}
        onChange={(e) => {
          setEmployee({ ...employee, gender: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Role"
        value={employee?.role}
        placeholder={``}
        onChange={(e) => {
          setEmployee({ ...employee, role: e.target.value });
          //checkEditData();
        }}
      />
      <InputTitleLeft
        title="Dob"
        value={employee?.dob}
        placeholder={``}
        onChange={(e) => {
          setEmployee({ ...employee, dob: e.target.value });
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
  setParentData: PropTypes.func,
};

export default ModalCustom;
