import DashboardGrafico from "../DashboardGrafico";

export default function SecondCard() {
  return(
    <div className="rounded-2xl flex justify-center items-center flex-col text-white"
          style={{
            height: "379px", 
            width:"351px", 
            backgroundColor: "#363447",
            boxShadow: '3px 4px 26px rgba(0, 0, 0, 0.25)'
            }}>

            <DashboardGrafico reais="" unidade="" titulo="Vendas fechadas" expectativa={100} resultado={70} cor="#A66DE9" />
          </div>
  )
}