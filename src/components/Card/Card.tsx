import styles from './Card.module.css';

type Props = {
  children?: React.ReactNode;
  padding: string;
};

const Card = (props: Props) => {
  const { children, padding } = props;
  return (
    <article className={`${styles.container} ${padding}`}>{children}</article>
  );
};

Card.defaultProps = {
  padding: 'padding-md',
};

export default Card;
