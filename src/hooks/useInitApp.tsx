import { useEffect, useMemo, useState } from "react";
import { IData } from "../types";
import axios from "axios";
import { BASE_TAG } from "../constants";

export const useInitApp = () => {
  const [data, setData] = useState<IData[]>([]);
  const [activeTag, setActiveTag] = useState<string>(BASE_TAG);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get("https://logiclike.com/docs/courses.json")
      .then(resp => {
        setData(resp.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const contextValue = useMemo(() => ({
    courses: data,
    activeTag,
    setActiveTag
  }), [data, activeTag]);

  return {contextValue, error, loading};
}