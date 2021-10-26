import "./layout.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import { useLayoutEffect, useRef, useState } from "react";
export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});


  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  useLayoutEffect(()=>{
    setBoxSize(pTag.current.getBoundingClientRect())
  },[quote])


  return (
    <div>
      <h1> Layout Effects </h1>
      <hr />
      <blockquote className="blockquote text-end">
        <p 
            ref={pTag}
            className={"mb-10"}
        > {quote} </p>
      </blockquote>
      <button className="btn btn-success" onClick={increment}>
        Next Quote
      </button>

      <pre>
          { JSON.stringify(boxSize, null, 3) }
      </pre>
    </div>
  );
};
