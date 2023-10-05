import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCatService } from "../services/catsService";
import useFetch from "../hooks/useFetch";

import useSWR from "swr";

const CatViews = () => {
  const { data: cat, fetchData: getCats } = useFetch(getCatService);

  return (
    <div>
      <img key={cat.id} src={cat.url} alt="Cat" />
      <button onClick={getCats}>Refetch</button>
    </div>
  );
};

export default CatViews;
