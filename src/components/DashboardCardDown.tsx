import Days from "./Days";

export default function DashboardCardDown(){
  return(
    <div style={{height: "11.625rem", width:"32.6875rem"}}>
        <div className="h-1 absolute" style={{width: '32.6875rem', marginTop: '6.0313rem', backgroundColor:'#4A4556'}}></div>
              
        <div className="flex" style={{gap: '3.6875rem'}}>
          <Days daysToTheWeek="dom" size="39"/>
          <Days daysToTheWeek="seg" size="115"/>
          <Days daysToTheWeek="ter" size="76"/>
          <Days daysToTheWeek="qua" size="159"/>
          <Days daysToTheWeek="qui" size="129"/>
          <Days daysToTheWeek="sex" size="120"/>
          <Days daysToTheWeek="sab" size="69"/>
        </div>
    </div>
  )
}