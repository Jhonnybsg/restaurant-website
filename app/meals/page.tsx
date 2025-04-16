import classes from './page.module.css';
export default function MealsPage() {
  return <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created 
        <span className={classes.hightlight}>by you</span>
      </h1>
      <p>Choose your favorte recipe and cook it yourself. It is easy and fun!</p>
    </header>
    <main></main>
  </>
}