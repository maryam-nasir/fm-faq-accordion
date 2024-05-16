import faqsIcon from "../assets/images/icon-star.svg";

const Header = () => {
  return (
    <div className="flex gap-6">
      <img src={faqsIcon} alt="Star icon" width={36} height={36} />
      <h1 className="text-6xl font-bold text-darkPurple">FAQs</h1>
    </div>
  );
};

export default Header;
