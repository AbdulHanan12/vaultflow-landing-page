import React from "react";
import codeBlockImg from '../../assets/code-block.png';
import cardAnalytics from '../../assets/logos/card-analytics.png';
import cardDigital from '../../assets/logos/card-digital.png';
import cardCode from '../../assets/logos/card-code.png';
import { Card, CardHeader, CardContent, CardFooter } from "../atoms/Card";

// Icons using the provided PNG files
const featureIcons = [
  <img src={cardAnalytics} alt="Analytics" className="w-12 h-12 object-contain" />,
  <img src={cardDigital} alt="Digital Credit" className="w-12 h-12 object-contain" />,
  <img src={cardCode} alt="Code Collaboration" className="w-12 h-12 object-contain" />,
];

const features = [
  {
    title: "Analytics Dashboard",
    description:
      "Our Analytics Dashboard provides a clear and intuitive interface for you to easily track and analyze your data. From customizable graphs and charts to real-time data updates, our dashboard offers everything you need to gain valuable insights and make data-driven decisions.",
    link: "View dashboard",
    icon: featureIcons[0],
  },
  {
    title: "Digital Credit Tokens",
    description:
      "Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.",
    link: "View tokens",
    icon: featureIcons[1],
  },
  {
    title: "Code collaboration",
    description:
      "Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.",
    link: "View code collaboration",
    icon: featureIcons[2],
    codeImage: <img src={codeBlockImg} alt="Code block example" className="w-full max-w-md rounded-lg shadow-lg" draggable={false} />,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-28">
      <div className="max-w-3xl w-full flex flex-col items-center mb-16 px-4">
        <h2 className="text-white text-4xl md:text-5xl font-semibold text-center mb-4 leading-tight">
          Features that<br />work for your<br />future.
        </h2>
        <p className="text-white/80 text-lg text-center mb-2">
          Check out our amazing features and experience<br />the power of Vaultflow for yourself.
        </p>
      </div>
      <div className="w-full max-w-5xl flex flex-col gap-10 px-4">
        {/* First row: two cards */}
        <div className="flex flex-col md:flex-row gap-10">
          {features.slice(0, 2).map((feature, idx) => (
            <Card key={feature.title} className="relative flex-1 p-8 flex flex-col gap-6 min-h-[260px] bg-white/5 border border-white/10 shadow-[0_4px_32px_0_rgba(128,90,213,0.25)] backdrop-blur-lg overflow-hidden">
              <CardHeader>{feature.icon}</CardHeader>
              <CardContent>
                <h3 className="text-white text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80 text-base mb-4">{feature.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-white font-normal underline underline-offset-2 decoration-white decoration-1 text-base hover:text-purple-300 transition-colors">{feature.link}</a>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Second row: one card with two columns (text + code image) */}
        <Card className="relative flex flex-col md:flex-row p-8 gap-8 min-h-[260px] bg-white/5 border border-white/10 shadow-[0_4px_32px_0_rgba(128,90,213,0.25)] backdrop-blur-lg overflow-hidden">
          <div className="flex-1 flex flex-col justify-center">
            <CardHeader>{features[2].icon}</CardHeader>
            <CardContent>
              <h3 className="text-white text-2xl font-semibold mb-2">{features[2].title}</h3>
              <p className="text-white/80 text-base mb-4">{features[2].description}</p>
            </CardContent>
            <CardFooter>
              <a href="#" className="text-white font-normal underline underline-offset-2 decoration-white decoration-1 text-base hover:text-purple-300 transition-colors">{features[2].link}</a>
            </CardFooter>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {features[2].codeImage}
          </div>
        </Card>
      </div>
    </section>
  );
}; 