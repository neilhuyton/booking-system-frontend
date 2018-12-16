import Link from "next/link";
import Cart from "../components/Cart";
import Units from "../components/Units";

const ResultsPage = props => (
  <div>
    <Cart />
    <Units />
    <Link
      href={{
        pathname: "details"
      }}
    >
      <a>Details</a>
    </Link>
  </div>
);

export default ResultsPage;
