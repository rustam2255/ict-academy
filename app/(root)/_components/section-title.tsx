

interface SectionProps {
  title: string 
}

const SectionTitle = ({title}: SectionProps) => {
  return (
    <div className='flex gap-10 mt-10 justify-between items-center'>
      <div className='w-[487px] h-0 border border-[rgba(62,189,128,1)]'></div>
      <div>
        <h2 className="text-[20px] font-semibold ">{title}</h2>
      </div>
      <div className='w-[487px] h-0 border border-[rgba(62,189,128,1)]'></div>
    </div>
  )
}

export default SectionTitle