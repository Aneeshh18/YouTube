import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="mx-4 flex text-sm items-center ">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Sports" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Cooking" />
    </div>
  );
};

export default ButtonList;
