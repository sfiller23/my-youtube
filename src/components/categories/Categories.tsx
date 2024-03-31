import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { CATEGORIES } from "../../utils/categories";
import { ITranslations } from "../../utils/translations";
import {
  CategoriesCarousel,
  CategoryItem,
  StyledCategories,
} from "./Category.styles";

const Categories = () => {
  const { text, activeCategory, setActiveCategory } = useAppContext();

  return (
    <CategoriesCarousel>
      <StyledCategories>
        {CATEGORIES.map((category, index) => (
          <CategoryItem
            $active={category.toLowerCase() === activeCategory.toLowerCase()}
            key={index}
            onClick={() => setActiveCategory(category)}
          >
            <Text>{text[category as keyof ITranslations]}</Text>
          </CategoryItem>
        ))}
      </StyledCategories>
    </CategoriesCarousel>
  );
};

export default Categories;
