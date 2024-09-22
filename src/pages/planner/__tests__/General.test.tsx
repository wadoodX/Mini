import { render, fireEvent } from "@testing-library/react";
import General from "../General";
import response from "../../../data/exampleResponse.json";

const mockProps = {
	stats: response.destination,
	setState: jest.fn(),
};

test("renders General component with destination data", () => {
	const { getByText } = render(<General {...mockProps} />);

	// Check if the "Overview" button is present
	const overviewButton = getByText("Overview");
	expect(overviewButton).toBeInTheDocument();

	// Check if the "General rmation" button is present
	const generalButton = getByText("General rmation");
	expect(generalButton).toBeInTheDocument();

	// Simulate a click event on the "Overview" button
	fireEvent.click(overviewButton);

	// Verify that the setState function was called with the expected argument
	expect(mockProps.setState).toHaveBeenCalledWith(true);

	// Check if the stat items are rendered with the expected content
	const currencyStat = getByText("INR");
	const oneDollarStat = getByText("1");
	const capitalStat = getByText("Washington D.C.");
	const weatherStat = getByText("Four-season climate");
	const timeStat = getByText("UTC-4");
	const languageStat = getByText("English");

	expect(currencyStat).toBeInTheDocument();
	expect(oneDollarStat).toBeInTheDocument();
	expect(capitalStat).toBeInTheDocument();
	expect(weatherStat).toBeInTheDocument();
	expect(timeStat).toBeInTheDocument();
	expect(languageStat).toBeInTheDocument();
});

test("toggles Overview and General rmation buttons", () => {
	const { getByText } = render(<General {...mockProps} />);

	// Check if the "Overview" button is present
	const overviewButton = getByText("Overview");
	expect(overviewButton).toBeInTheDocument();

	// Check if the "General rmation" button is present
	const generalButton = getByText("General rmation");
	expect(generalButton).toBeInTheDocument();

	// Click the "Overview" button
	fireEvent.click(overviewButton);

	// Click the "General rmation" button
	fireEvent.click(generalButton);
});
