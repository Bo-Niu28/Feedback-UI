import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Page</h1>
        <p>This is a app build using react to add feedback for product</p>
        <p>Version: 1.0.0</p>
        <Link to="/">
          <p>Back to Home Page</p>
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
