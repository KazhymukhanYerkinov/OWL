import { GetStaticProps } from "next";
import React from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";


const Home = ({ menu }: HomeProps): JSX.Element => {

  const [rating, setRating] = React.useState(4);
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
      <Rating isEditable rating = {rating} setRating = { setRating } />
    </React.Fragment>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>('https://courses-top.ru/api/top-page/find', { firstCategory });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
