import styles from './Card.module.css';

type Props = {
  children?: React.ReactNode;
  padding: string;
  background: string;
};

const Card = (props: Props) => {
  const { children, padding, background } = props;
  return (
    <article className={`${styles.container} ${padding} ${background}`}>
      {children}
    </article>
  );
};

Card.defaultProps = {
  padding: 'padding-md',
  background: 'background-primary',
};
export default Card;
