"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading({ loading }) {
  const override = {
    display: "block",
    margin: "100px auto",
    // borderColor: "red",
  };
  return (
    <ClipLoader
      color={"#3b82f6"}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
