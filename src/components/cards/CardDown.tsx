import DashboardCardDown from "../DashboardCardDown"
import polygonUp from '../../assets/icons/polygonUp.svg'
import polygonDown from '../../assets/icons/polygonDown.svg'

export default function CardDown(){
  return(
    <div className="rounded-2xl text-white" style={{height: "314px", width:"1120px", backgroundColor: "#363447", marginTop: "59px", boxShadow: '3px 4px 26px rgba(0, 0, 0, 0.25)'}}>
              <h1 className="text-2xl ml-12 pt-7 font-bold pb-8">Vendas por dia da semana</h1>
              <div className="flex">

            <div className="ml-12" style={{width: '469px'}}>
              <div>
                <h3 className="text-sm flex gap-1 items-center font-semibold"> <img src={polygonUp} alt="" /> Dia com mais vendas</h3>
                <h4 className="font-semibold text-2xl mt-2">quarta-feira</h4>
              </div>
              <div className="mt-8">
                <h3 className="flex items-center font-semibold gap-1"> <img src={polygonDown} alt="" /> Dia com menos vendas</h3>
                <h4 className="font-semibold text-2xl mt-2">domingo</h4>
              </div>
            </div>
                <DashboardCardDown/>
            </div>
        </div>
  )
}