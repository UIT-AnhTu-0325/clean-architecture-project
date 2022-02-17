import { Result } from "antd";
import { useNavigate } from "react-router";
import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

/**
 * @author
 * @function Customer
 **/

export const NotAuthorized = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Back to Home
          </Button>
        }
      />
      ,
    </div>
  );
};
