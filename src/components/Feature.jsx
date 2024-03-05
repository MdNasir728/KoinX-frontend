import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Feature() {
  const features = [
    "Overview",
    "Fundamentals",
    "News Insight",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];
  return (
    <Tabs className="flex justify-start py-6 pb-2">
      <TabsList className="flex bg-inherit">
        {features.map((feature) => (
          <TabsTrigger key={feature} value={feature}>
            {feature}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
