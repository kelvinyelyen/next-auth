export default function Footer() {
  return (
    <div className="absolute w-full border-t border-black bg-black py-5 text-center">
      <p className="text-gray-100 text-sm">
       Author{" "}
        <a
          className="text-sm text-gray-100 underline transition-colors"
          href="https://twitter.com/kelvinyelyen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kelvin Yelyen
        </a>
      </p>
    </div>
  );
}
