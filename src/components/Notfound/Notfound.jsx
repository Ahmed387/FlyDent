import img404 from "../../assets/spotlight-shines-large-white-numbers-404-with-text-error-page-found_1294789-14889.jpg";
export default function Notfound() {
  return (
    <>
      <div className="w-full h-auto text-center">
        <img
          className="w-full h-auto"
          src={img404}
          alt="error image"
          loading="lazy"
        />
      </div>
    </>
  );
}
