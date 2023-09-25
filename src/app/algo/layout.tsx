import SubHeader from "@/components/base/SubHeader";
import Link from "@/components/base/Link";

export const metadata = {
  title: "1W1M1Q1Y - 알고리즘",
  description: "Keep Going Do Something",
};

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubHeader href="/algo">
        <Link href="/algo/category">카테고리</Link>
        <Link href="/algo/difficult">난이도</Link>
        <Link href="/algo/solved">내가 푼 문제</Link>
        <Link href="/algo/schedule">일정</Link>
      </SubHeader>
      {children}
    </>
  );
}
