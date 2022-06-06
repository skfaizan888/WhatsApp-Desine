import { Grid } from "@mui/material";
import React, { useState } from "react";
import Faizu from "./Faizu";
import Rohu from "./Rohu";
import "./Chat.css";

const Chat = () => {
  const [userfaizu, setUserfaizu] = useState([]);
  const [userrahu, setUserrahu] = useState([]);

  const [faizutyping, setFaizutyping] = useState(false);
  const [rahutyping, setRahutyping] = useState(false);
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Faizu
            setUserfaizu={setUserfaizu}
            userrahu={userrahu}
            userfaizu={userfaizu}
            rahutyping={rahutyping}
            setFaizutyping={setFaizutyping}
          />
        </Grid>

        <Grid item xs={6}>
          <Rohu
            setUserrahu={setUserrahu}
            userfaizu={userfaizu}
            userrahu={userrahu}
            setRahutyping={setRahutyping}
            faizutyping={faizutyping}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
