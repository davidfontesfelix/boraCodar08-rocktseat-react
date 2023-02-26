interface propsDays {
  daysToTheWeek: string
  size: string
}

export default function Days(props: propsDays) {
  return(
    <div className="flex flex-col items-center justify-end z-10" style={{width: '30px', height: '66px', marginTop: '118px'}}>
      <div >
        <div className=" w-4 rounded-full" style={{height: `${props.size}px`, background: 'linear-gradient(180deg, #90F7EC 0%, #32CCBC 100%)'}}></div>
      </div>
        <h3 className="font-medium text-sm">{props.daysToTheWeek}</h3>
    </div>
  )
}