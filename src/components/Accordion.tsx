import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
}; //react.reactnode, puede ser un div, un h1, un p, lo que sea

function Accordion(props: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Cerrar" : "Abrir"}
        </button>
      </div>
      {open && <div>{props.children}</div>}
    </div>
  );
}

export default Accordion;
