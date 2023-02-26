import DashboardGrafico from "../DashboardGrafico";

export default function ThirdCard(){
  return(
    <div className="
          rounded-2xl 
          flex 
          justify-center 
          items-center 
          flex-col 
          text-white" 
          style={{
            height: "379px",
            width:"409px", 
            backgroundColor: "#363447"
            }}>
            <DashboardGrafico reais="R$ " unidade={'k'} titulo="Meta mensal" expectativa={70} resultado={63} cor="#A66DE9" />
          </div>
  )
}