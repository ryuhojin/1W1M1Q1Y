import SubHeader from "@/components/base/SubHeader";

export const metadata = {
  title: "1W1M1Q1Y - 알고리즘",
  description: "Keep Going Do Something",
};

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubHeader>
        <a>프로젝트 목록</a>
        <a>종료된 프로젝트</a>
        <a>멤버</a>
      </SubHeader>
      {children}
    </>
  );
}
