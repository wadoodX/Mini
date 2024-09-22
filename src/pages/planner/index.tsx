import ItineraryPlanner from "./Itinerary";
import ItineraryDisplay from "./ItineraryDisplay";
import Map from "./Map";
import { useItinerary } from "../../context/ItineraryContext";
import Loading from "../../components/ui/Loading";
import { useLoading } from "../../context/LoadingContext";
import { useMediaQuery } from "react-responsive";

const Planner: React.FC = () => {
	const { response } = useItinerary();
	const { isLoading } = useLoading();
	const bigScreen = useMediaQuery({ minWidth: 768 });

	return (
		<div>
			{!response && (
				<div className="mx-auto max-w-4xl bg-gray-800 py-20 md:bg-white md:px-6 md:py-40">
					<ItineraryPlanner />
				</div>
			)}
			{isLoading ? <Loading /> : ""}
			{response && (
				<>
					<ItineraryDisplay response={response} />
					{bigScreen && (
						<div className="fixed right-0 top-0 z-20 w-[40vw] bg-white">
							<Map location={response.destination.destinationCity} />
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Planner;
