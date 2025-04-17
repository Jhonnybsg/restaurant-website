import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '../../components/meals/meals-grid'; // Uncomment and update the path if MealsGrid is a separate component
import { getMeals } from '../../lib/meals';
import { Suspense } from 'react';


async function Meals() {
  const meals = await getMeals();

  //throw Error();

  return <MealsGrid meals={meals}/>
}

export default async function MealsPage() {

  return (<>
    <header className={classes.header}>
      <h1>
        Delicious meals, created 
        <span className={classes.hightlight}>by you</span>
      </h1>
      <p>Choose your favorte recipe and cook it yourself. It is easy and fun!</p>
      <p className={classes.cta}>
        <Link href='/mals/share'>
          Share Your Favorite Recipe
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
        <Meals />
      </Suspense>
    </main>
  </>)
}