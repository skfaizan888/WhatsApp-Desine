import React, { useState } from "react";
import { Grid, Avatar, Alert } from "@mui/material";
import InsertEmoticonSharpIcon from "@mui/icons-material/InsertEmoticonSharp";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { Col, Row, Card } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";

const Rohu = ({
  setUserrahu,
  userfaizu,
  userrahu,
  setRahutyping,
  faizutyping,
}) => {
  const [txt, setTxt] = useState("");
  return (
    <div className="content-main-div">
      <Row className="content-main-headin-green">
        <Col lg={1}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1564045288780-5c11658fefa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG92ZSUyMGhhbmR8ZW58MHx8MHx8&w=1000&q=80"
            className="content-avtar"
          />
        </Col>
        <Col lg={3}>
          <h5 className="content-heading-name">Rohu Khan</h5>
          <p className="content-typing"> {faizutyping ? "Typing..." : " "} </p>
        </Col>
        <Col lg={5}>
          <SearchIcon style={{ marginLeft: "250px" }} />
        </Col>
        <Col lg={3}>
          <MoreVertIcon />
        </Col>
      </Row>
      <Col lg={12}>
        <Card className="content-background-img">
          {userrahu.map((elem) => (
            <Row>
              <Col lg={3}>
                <Alert
                  severity="success"
                  style={{ position: "relative", left: "450px" }}
                >
                  <strong> {elem} </strong>
                </Alert>
              </Col>
            </Row>
          ))}
          {userfaizu.map((elem) => (
            <Row style={{ margin: "10px" }}>
              <Col lg={6}>
                <Alert severity="info">
                  <strong> {elem} </strong>
                </Alert>
              </Col>
            </Row>
          ))}
        </Card>
      </Col>

      <Row className="content-main-headin-green">
        <Col lg={2}>
          <InsertEmoticonSharpIcon className="content-icon-frst" />
        </Col>
        <Col lg={1}>
          <AttachFileIcon className="content-icon-frst" />
        </Col>
        <Col lg={7}>
          <input
            className="content-text-filed"
            type="text"
            placeholder="Type a message"
            value={txt}
            onFocus={() => setRahutyping(true)}
            onBlur={() => setRahutyping(false)}
            onChange={(e) => setTxt(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <SendIcon
            className="content-send-button"
            onClick={() => {
              setUserrahu([...userrahu, txt]);
              setTxt("");
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Rohu;
