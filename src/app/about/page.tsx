import { Metadata } from "next";

export const metadata: Metadata = {
  title: "mstomar | full stack developer",
  description: "Learn more about me and what I do.",
};
export default function About() {
    return (
      <div className="flex justify-center">
        <p className="text-green-500 text-7xl">This Is my About Page</p>
      </div>
    );
  }