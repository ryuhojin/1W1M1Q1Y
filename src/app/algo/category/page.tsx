import CategoryItem from "@/components/algo/CategoryItem";
import CategoryList from "@/components/algo/CategoryList";
import Container from "@/components/base/Container";
import SubTitle from "@/components/base/SubTitle";

export default function Page() {
  return (
    <Container>
      <SubTitle>카테고리</SubTitle>
      <CategoryList>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </CategoryList>
    </Container>
  );
}
