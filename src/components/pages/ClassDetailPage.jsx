import { useParams } from "react-router-dom";
import useClass from "../../hooks/useClass";

export default function ClassDetailPage() {
  const { className } = useParams();
  const classDataResult = useClass(className);

  return (
    <>
      <div>
        <p>{classDataResult.name}</p>
        <p>{classDataResult.index}</p>
        <p>{classDataResult.hit_die}</p>
      </div>
    </>
  );
}
