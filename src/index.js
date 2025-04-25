import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card"; // Change path as per your file structure
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"; // Change path as per your file structure
import { Button } from "./components/ui/button"; // Change path as per your file structure
import { Textarea } from "./components/ui/textarea"; // Change path as per your file structure

const syllabus = {
  physics: [
    {
      name: "Kinematics",
      concepts: ["Displacement & Distance", "Velocity & Acceleration", "Graphs of Motion"],
      formulas: ["v = u + at", "s = ut + 1/2at²", "v² = u² + 2as"],
      pyqs: [
        "A body moves with constant acceleration. If its velocity after 5s is 20 m/s, what was its initial velocity if acceleration is 2 m/s²? (JEE 2022)",
        "Draw and interpret a velocity-time graph for uniformly accelerated motion. (JEE Advanced 2021)"
      ]
    },
    {
      name: "Laws of Motion",
      concepts: ["Newton's Laws", "Free Body Diagrams", "Friction"],
      formulas: ["F = ma", "f = μN"],
      pyqs: [
        "A 10 kg block is pushed with a force of 50 N. Find the acceleration. (JEE Main 2023)",
        "Explain the concept of limiting friction with an example. (JEE Advanced 2020)"
      ]
    }
  ],
  maths: [
    {
      name: "Trigonometry",
      concepts: ["Basic Trigonometric Ratios", "Trigonometric Identities", "Graphs of Trig Functions"],
      formulas: ["sin²θ + cos²θ = 1", "1 + tan²θ = sec²θ", "sin(a ± b) = sin a cos b ± cos a sin b"],
      pyqs: [
        "Simplify: sin²x + cos²x. (JEE 2023)",
        "If sin A = 3/5, find cos A and tan A. (JEE Advanced 2021)"
      ]
    }
  ],
  chemistry: [
    {
      name: "Chemical Bonding",
      concepts: ["Types of Bonds", "VSEPR Theory", "Hybridization"],
      formulas: [
        "Bond Order = (Nb - Na) / 2",
        "Formal Charge = (Valence electrons - Nonbonding electrons - Bonding electrons/2)"
      ],
      pyqs: [
        "Predict the shape of BF₃ using VSEPR theory. (JEE 2022)",
        "Determine bond order of O₂ molecule. (JEE Advanced 2020)"
      ]
    }
  ]
};

const App = () => {
  const [doubt, setDoubt] = useState("");
  const [solution, setSolution] = useState("");

  const solveDoubt = async () => {
    setSolution("Solving your doubt...");
    try {
      const response = await fetch("https://your-backend-api.com/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doubt })
      });
      const data = await response.json();
      setSolution(data.explanation);
    } catch (error) {
      setSolution("Error solving doubt. Try again later.");
    }
  };

  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">JEE Prep App</h1>

      <Tabs defaultValue="physics">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="physics">Physics</TabsTrigger>
          <TabsTrigger value="maths">Maths</TabsTrigger>
          <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
        </TabsList>

        {Object.entries(syllabus).map(([subject, chapters]) => (
          <TabsContent key={subject} value={subject}>
            {chapters.map((chapter) => (
              <Card key={chapter.name} className="my-4">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{chapter.name}</h2>

                  <h3 className="font-semibold">Concepts:</h3>
                  <ul className="list-disc ml-5 mb-2">
                    {chapter.concepts.map((concept, idx) => (
                      <li key={idx}>{concept}</li>
                    ))}
                  </ul>

                  <h3 className="font-semibold">Formulas:</h3>
                  <ul className="list-disc ml-5 mb-2">
                    {chapter.formulas.map((formula, idx) => (
                      <li key={idx}>{formula}</li>
                    ))}
                  </ul>

                  <h3 className="font-semibold">Previous Year Questions:</h3>
                  <ul className="list-disc ml-5">
                    {chapter.pyqs.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Ask a Doubt</h2>
          <Textarea
            placeholder="Type your doubt here..."
            className="mb-2"
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
          />
          <Button className="w-full" onClick={solveDoubt}>
            Solve and Explain (AI)
          </Button>
          {solution && (
            <div className="mt-4 bg-gray-100 p-3 rounded">
              <h3 className="font-semibold">Solution:</h3>
              <p>{solution}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
