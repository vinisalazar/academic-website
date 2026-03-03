import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src={profileImage}
          alt="Dr. Vinícius W. Salazar"
          className="w-40 h-40 rounded-full object-cover border-2 border-border shrink-0"
        />
        <div>
          <h1 className="font-serif text-4xl font-semibold tracking-tight mb-3 text-foreground">
            Vinícius W. Salazar
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Bioinformatician · Melbourne Bioinformatics (VLSCI)
          </p>
          <div className="prose">
            <p>
              I am a research software engineer and bioinformatician with extensive experience
              in open-source development and software education. My work sits at the intersection
              of computational biology, marine microbial ecology, and metagenomics.
            </p>
            <p>
              Currently, I am a Bioinformatician at{" "}
              <strong>Melbourne Bioinformatics</strong> (VLSCI), University of Melbourne.
              My research focuses on metagenomic data integration for microbial oceanography,
              environmental DNA analysis, and the development of open bioinformatics tools.
            </p>
            <p>
              My PhD thesis,{" "}
              <em>Metagenomic Data Integration for Microbial Oceanography</em>, was completed
              at the School of Mathematics and Statistics, University of Melbourne.
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <Link
              to="/research"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              Research →
            </Link>
            <Link
              to="/publications"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              Publications →
            </Link>
            <Link
              to="/cv"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              CV →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
