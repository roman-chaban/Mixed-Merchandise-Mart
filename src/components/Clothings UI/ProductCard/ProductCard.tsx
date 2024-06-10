import { Button } from '@/components/ui/Button/Button';
import { mensFashionItem } from '@/interfaces/mens-fashion';
import { Star, StarHalf } from 'grommet-icons';
import type { FC } from 'react';
import Image from 'next/image';
import styles from './ProductCardStyles.module.scss';
import Link from 'next/link';

interface ProductCardProps {
  product: mensFashionItem;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__container}>
        <Image
          priority
          src={product.mainImage}
          alt={`Product Image ${product.title}`}
          width={200}
          height={220}
          className={styles.productCard__image}
        />
        <div className={styles.productCard__info}>
          <h3 className={styles.productCard__title}>{product.title}</h3>
          <div className={styles.productCart__prices}>
            <h4 className={styles.productCard__price}>
              Price: {product.price}$
            </h4>
            <p className={styles.productCard__discount}>{product.price}$</p>
          </div>
          <div className={styles.productCard__rating}>
            Rating:
            {product.productRating === 5 ? (
              <Star color='plain' />
            ) : (
              <StarHalf color='plain' />
            )}
            ({product.productRating})
          </div>
          <span className={styles.productCard__id}>
            ProductId: {product.productId}
          </span>
          <Button
            type='button'
            className={styles.productCard__button}
            onClick={handleScrollTop}
          >
            <Link
              className={styles.productCard__link}
              href={`/mensClothings/${product.name.replaceAll(' ', '-')}`}
            >
              View product
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
