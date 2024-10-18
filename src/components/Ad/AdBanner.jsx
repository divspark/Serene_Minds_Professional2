import Poster from "../../assets/poster.png";
export default function AdBanner() {
  return (
    <div className="p-5">
      <img src={Poster} alt="Poster" className="w-full object-cover" />
    </div>
  );
}
