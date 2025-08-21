interface SectionProps {
  title: string;
}

const SectionTitle = ({ title }: SectionProps) => {
  return (
    <div className="flex gap-3 sm:gap-6 md:gap-8 lg:gap-10 mt-6 sm:mt-8 md:mt-10 justify-between items-center px-2 sm:px-4 md:px-6 w-full max-w-7xl mx-auto">
      {/* Left line */}
      <div className="flex-1 h-0 border border-[rgba(62,189,128,1)]"></div>

      {/* Title */}
      <div className="flex-shrink-0 max-w-[300px]">
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold whitespace-nowrap text-center">
          {title}
        </p>
      </div>

      {/* Right line */}
      <div className="flex-1 h-0 border border-[rgba(62,189,128,1)]"></div>
    </div>
  );
};

export default SectionTitle;