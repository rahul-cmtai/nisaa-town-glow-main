import LandingPage from "./LandingPage";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NISAA SEZ TOWN - Premium Plots in Hyderabad & Ranga Reddy | RERA Approved Township</title>
        <meta name="description" content="Buy premium RERA approved plots in Hyderabad and Ranga Reddy district at NISAA SEZ TOWN. Best investment opportunity with modern amenities, airport connectivity, and high ROI potential." />
        <meta name="keywords" content="plots in Hyderabad, plots in Ranga Reddy, RERA approved plots Telangana, residential plots Hyderabad, NISAA SEZ TOWN, real estate investment Hyderabad, plotted development Ranga Reddy, premium plots Hyderabad" />
        <link rel="canonical" href="https://nisaaseztown.com/" />
        <meta property="og:title" content="Premium Plots in Hyderabad & Ranga Reddy | NISAA SEZ TOWN" />
        <meta property="og:description" content="Buy premium RERA approved plots in Hyderabad and Ranga Reddy district. Best investment opportunity with modern amenities and high returns." />
      </Helmet>
      <LandingPage />
    </>
  );
};

export default Index;
