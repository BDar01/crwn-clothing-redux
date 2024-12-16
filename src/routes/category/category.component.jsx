import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';
import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';
//import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryContainer, Title } from './category.styles';

const Category = () => {
    const { category } = useParams();
    //const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [ products, setProducts ] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {isLoading ? (
            <Spinner /> 
            ) : (
                <CategoryContainer>
                    {products && 
                        products.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    }
                </CategoryContainer>
            )}
        </Fragment>
    );
};

export default Category;