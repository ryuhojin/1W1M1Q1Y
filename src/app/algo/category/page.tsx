import CategoryItem from "@/components/algo/CategoryItem";
import CategoryList from "@/components/algo/CategoryList";
import Container from "@/components/base/Container";
import SubDescription from "@/components/base/SubDescription";
import SubTitle from "@/components/base/SubTitle";

export default function Page() {
  return (
    <Container>
      <SubTitle>카테고리</SubTitle>
      <SubDescription>
        해당 페이지는 알고리즘을 카테고리 분류별로 나누어놓은 화면으로써 스터디원들이 편하게 카테고리 별로 문제를 접근할 수 있게 구성된 페이지 입니다.
        <br />
        해당 페이지를 통해 알고리즘을 분류별로 어느정도 까지 풀었는지 한눈에 확인하실 수 있습니다.
      </SubDescription>
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
