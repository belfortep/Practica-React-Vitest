import Accordion from "./Accordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Accordion", () => {
  beforeEach(() => {
    //con el beforeEach no tengo que copiar el render dentro de cada bloque de test
    render(
      //del testing-library/react, es como que renderiza el componente por pantalla, util para poder probar
      <Accordion title="Hola">
        <h3>Un contenido</h3>
        <div>bla bla bla Lorem bla bla bla</div>
      </Accordion>
    );
  });

  test("Deberia mostrar siempre el titulo", () => {
    //otro del testing-library, "busca" en la pantalla alguna propiedad. en este caso utilice getByText
    expect(screen.getByText("Hola")).toBeDefined();
  });

  test("No deberia mostrar el contenido al inicio", () => {
    expect(screen.queryByText(/Lorem/i)).toBeNull(); //con queryByText puedo usar una regex y me busca lo que quiero
  });

  test("Deberia mostrar el contenido cuando se clickea el boton", () => {
    const button = screen.getByText(/abrir/i);
    fireEvent.click(button);//fireEvent, como su nombre dice ejecuta un evento del elemento que le pase
    expect(screen.queryByText(/lorem/i)).toBeDefined();
  });

  test("Deberia ocultar el contenido cuando se clickea el boton", () => {
        const button = screen.getByText(/abrir/i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/lorem/i)).toBeNull();
      });
});
