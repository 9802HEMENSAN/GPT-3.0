import { render, screen, fireEvent, waitForElementToBeRemoved, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "./components/Card";
import { Listing } from "./components/Listing";
import {mockData} from "./mockData";



describe("Card component 0", () => {
  it("renders without errors", () => {
    expect(() => render(<Listing />)).not.toThrow();
  });
});

describe("Card component 1", () => {
  it("renders loading state initially", () => {
    render(<Listing />);
    
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});

describe("Card component 2", () => {
  it("loads the first object correctly", () => {
    render(<Card products={mockData} />);
    const firstObjectElements = screen.getAllByText(mockData[0].energy_type);
    expect(firstObjectElements[0]).toBeInTheDocument();
  });
});

describe("Card component 3",  () => {
  it("Correct count for data objects", async () => {
    render(<Card products={mockData} />);
      const loadedObjects = screen.getAllByTestId("product-card");
      expect(loadedObjects).toHaveLength(2);
  });
});

describe("Card component 9", () => {
  it("bottom HTML content should be correct Ausgrid content", () => {
    render(<Card products={mockData} />);
    const bottomContent = screen.getAllByTestId("bottom-content");
    let inner = bottomContent[0].innerHTML;
    expect(inner).toEqual(mockData[0]?.dmo_content?.Ausgrid);  
  });
});

describe("Card component 4", () => {
  it("Loads the second data object pricing correctly", () => {
    render(<Card products={mockData} />);

      const ausgrid = screen.getByText(mockData[1]?.dmo_percentage?.Ausgrid);
      expect(ausgrid).toBeInTheDocument();
  });
});

describe("Card component 5", () => {
  it("Loads the logo correctly", async () => {
    render(<Card products={mockData} />);
    const logoImage = await screen.getByTestId(mockData[1]?.provider?.logo);
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', mockData[1]?.provider?.logo);    
  });
});

describe("Card componen 6", () => {
  it("there should be a button called connect online today", () => {
    render(<Card products={mockData} />);
        const button = screen.getAllByText(/connect online today/i);
        expect(button[0]).toBeInTheDocument();
  });
});