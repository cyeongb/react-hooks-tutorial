import { useEffect, useState, useRef } from "react";

const useFetch = ({ url }) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      //unmount할때 호출됨
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      });
  }, [url, setState]);
};
export default useFetch;
