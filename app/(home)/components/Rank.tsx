import TableBodyText from './TableBodyText';
import TableHeadText from './TableHeadText';
import Text from './Text';

export default function Rank() {
  return (
    <section className="pt-10 px-24 pb-20">
      <div className="flex gap-4">
        <Text text="KBO 실시간 순위" />
        <p className="text-[#D7D7D7] font-normal text-12 self-end">
          (2024.09.30. 기준)
        </p>
      </div>
      <table className="w-full">
        <thead>
          <tr className="pt-16 pl-57 pb-10 my-14 flex gap-27 border-b-1 border-solid border-[#D7D7D7]">
            <TableHeadText text="경기수" />
            <TableHeadText text="승" />
            <TableHeadText text="패" />
            <TableHeadText text="무" />
            <TableHeadText text="승률" />
            <TableHeadText text="게임차" />
          </tr>
        </thead>
        <tbody className="flex flex-col gap-11">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element, index) => {
            return (
              <tr className="flex gap-14 align-center" key={index}>
                <td className="font-normal text-14 shrink-0 min-w-15">
                  {index + 1}
                </td>
                <td className="font-normal text-14 shrink-0">삼성</td>
                <TableBodyText text="94" />
                <TableBodyText text="57" />
                <TableBodyText text="35" />
                <TableBodyText text="2" />
                <TableBodyText text="0.431" />
                <TableBodyText text="94" />
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
