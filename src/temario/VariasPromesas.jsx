import axios from "axios";
import React, { useEffect, useState } from "react";
import useMultiFetch from "./useMultiFetch";

export const getCat = () => {
  return axios.get("https://api.thecatapi.com/v1/images/search");
};

export const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

export const adapterCat = (res) => res[0].url;

const VariasPromesas = () => {
  const { data, error, isLoading } = useMultiFetch([
    {
      name: "users",
      initialState: [],
      request: getUsers,
    },
    {
      name: "cat",
      initialState: "",
      request: getCat,
      adapter: adapterCat,
    },
  ]);

  return (
    <div>
      <img
        src={data.cat}
        alt="cat"
        style={{ width: "200px", height: "200px" }}
      />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data?.users?.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
            </div>
          );
        })
      )}
    </div>
  );
};

export default VariasPromesas;
