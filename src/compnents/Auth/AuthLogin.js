import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../../utils/constants";
import axios from "axios";
function AuthLogin({ children }) {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      axios
        .get(`${serverUrl}/loginadmin`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setVerify(true);
          }
        })
        .catch((err) => {
          navigate("/auth/login", { replace: true });
        });
    } else {
      navigate("/auth/login", { replace: true });
    }
  }, [token]);

  if (verify) return <>{children}</>;
}

export default AuthLogin;
