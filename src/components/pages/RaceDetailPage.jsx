import { useParams } from "react-router-dom";
import useRace from "../../hooks/useRace";

export default function RaceDetailPage() {
  const { raceName } = useParams();
  const raceData = useRace(raceName);

  return (
    <>
      <div>
        <p>{raceData.name}</p>
      </div>
    </>
  );
}
