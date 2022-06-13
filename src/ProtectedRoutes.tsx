import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isJoinedState } from "./recoil/atoms";

const ProtectedRoutes: React.FC<{ children: any }> = ({ children }) => {
  const [isJoined] = useRecoilState(isJoinedState);

  if (isJoined) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
