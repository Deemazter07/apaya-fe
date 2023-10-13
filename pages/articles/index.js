import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";

export default function Articles() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      <Jumbotron />

      <div className="h-96 bg-black mt-96"></div>
    </div>
  );
}
