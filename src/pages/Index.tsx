import { Navigation } from "@/components/Navigation";
// import { Hero } from "@/components/Hero";
// import { About } from "@/components/About";
// import { Education } from "@/components/Education";
// import { Experience } from "@/components/Experience";
// import { Skills } from "@/components/Skills";
// import { Projects } from "@/components/Projects";
// import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <h1 style={{ color: "white", fontSize: "40px", textAlign: "center", marginTop: "100px" }}>
        Hello World - The page works!
      </h1>
      <Footer />
    </div>
  );
};

export default Index;
