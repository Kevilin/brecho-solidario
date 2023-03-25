import React from "react";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/userAuthContext";

const Logout = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/brecho-solidario/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="p-4 box mt-3 text-center">
        Hello {user.displayName} <br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Logout;



