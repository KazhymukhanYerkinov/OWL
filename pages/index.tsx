import React from "react";
import { Button, Htag, P, Tag } from "../components";


export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Htag tag = 'h1'> Текст </Htag>
      <Button appearance = 'primary' arrow = 'right'> Кнопка </Button>
      <Button appearance = 'ghost' arrow = 'down'> Кнопка </Button>
      <P size = 'l'> Large </P>
      <P size = 'm'> Medium </P>
      <P size = 's'> Small </P>
      <Tag size = 's'> small </Tag>
      <Tag size = 's' color = 'red'> hh.kz </Tag>
      <Tag size = 's' color = 'red' href = 'dasdasdas'> hh.kz </Tag>


    </React.Fragment>
  );
}
