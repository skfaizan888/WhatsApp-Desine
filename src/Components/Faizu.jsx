import { Grid, Avatar, Alert } from "@mui/material";
import InsertEmoticonSharpIcon from "@mui/icons-material/InsertEmoticonSharp";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";

const Faizu = ({
  setUserfaizu,
  userrahu,
  userfaizu,
  rahutyping,
  setFaizutyping,
}) => {
  const [txt, setTxt] = useState("");
  return (
    <div className="content-main-div">
      <Row className="content-main-headin-green">
        <Col lg={1}>
          <Avatar
            alt="Remy Sharp"
            src="IMG_5617.jpeg"
            className="content-avtar"
          />
        </Col>
        <Col lg={3}>
          <h5 className="content-heading-name">Shaik Faizu</h5>
          {/* <p>online</p> */}
          <p className="content-typing">
            {" "}
            {rahutyping ? "Typing..." : "online"}{" "}
          </p>
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
          {userfaizu.map((elem) => (
            <Row style={{ margin: "10px" }}>
              <Col lg={4}>
                <Alert
                  severity="success"
                  style={{ position: "relative", left: "410px" }}
                >
                  <strong> {elem} </strong>
                </Alert>
              </Col>
            </Row>
          ))}
          {userrahu.map((elem) => (
            <Row style={{ margin: "10px" }}>
              <Col lg={4}>
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
            value={txt}
            onFocus={() => setFaizutyping(true)}
            onBlur={() => setFaizutyping(false)}
            placeholder="Type a message"
            onChange={(e) => setTxt(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <SendIcon
            className="content-send-button"
            onClick={() => {
              setUserfaizu([...userfaizu, txt]);
              setTxt("");
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Faizu;
