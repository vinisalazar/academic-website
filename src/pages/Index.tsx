import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src={profileImage}
          alt="Dr. Jane Smith"
          className="w-40 h-40 rounded-full object-cover border-2 border-border shrink-0"
        />
        <div>
          <h1 className="font-serif text-4xl font-semibold tracking-tight mb-3 text-foreground">
            Jane Smith
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Associate Professor of Linguistics · University of California
          </p>
          <div className="prose">
            <p>
              I study how humans understand and produce language in real-time, drawing on
              methods from computational modeling, psycholinguistics, and cognitive neuroscience.
              My work explores syntactic prediction, cross-linguistic variation, and language acquisition.
            </p>
            <p>
              I direct the{" "}
              <strong>Language, Computation &amp; Cognition Lab</strong> (LC² Lab),
              where we combine behavioral experiments, neuroimaging, and computational models
              to understand the cognitive architecture of language.
            </p>
            <p>
              My book{" "}
              <em>Language in Mind and Brain: A Computational Approach</em> was published
              by Oxford University Press in 2022.
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
