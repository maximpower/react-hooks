import "./layout.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import { useLayoutEffect, useRef, useState } from "react";
export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const [boxSize, setBoxSize] = useState({});
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];
  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote]);

  return (
    <div>
      <h1> Layout Effect </h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p 
            className={"mb-10"}
            ref={pTag}
        > 
            {quote} 
        </p>
      </blockquote>

    <pre>{ JSON.stringify(boxSize, null,3) }</pre>

      <button className="btn btn-success" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};
