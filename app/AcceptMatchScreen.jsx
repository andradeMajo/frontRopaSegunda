import { useLocalSearchParams } from "expo-router";
import MatchDetail from "./MatchDetail";
export default function AcceptMatchScreen() {
  const params = useLocalSearchParams();
  return <MatchDetail mode="accept" data={params} />;
}