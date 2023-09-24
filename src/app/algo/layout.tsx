import SubHeader from "@/components/base/SubHeader";

export const metadata = {
  title: "1W1M1Q1Y - 알고리즘",
  description: "Keep Going Do Something",
};

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubHeader>
        <a>카테고리</a>
        <a>난이도</a>
        <a>내가 푼 문제</a>
        <a>일정</a>
      </SubHeader>
      {children}
    </>
  );
}
