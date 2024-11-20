import Poster from "../../assets/poster.png";
export default function AdBanner() {
  return (
    <div className="px-1 py-3">
      <img src={Poster} alt="Poster" className="w-full object-cover" />
    </div>
  );
}
