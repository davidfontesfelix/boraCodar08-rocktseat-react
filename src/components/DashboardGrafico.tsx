import Grafico from "./Grafico"
import Ellipse from '../assets/Ellipse.svg'

interface propsDashboard {
  expectativa: number
  resultado: number
  titulo: string
  cor: string
  unidade: string
  reais: string
}

export default function DashboardGrafico(props: propsDashboard){
  const porcentagem = (props.resultado / props.expectativa) * 100 
  return(
    <>

      <h1 className="absolute text-2xl mb-72 font-semibold">{props.titulo}</h1>
            <img className="absolute " src={Ellipse} alt="" style={{marginTop: '92px', marginBottom: '83px'}} />
            <h1 className="text-center absolute text-4xl font-bold">
              {porcentagem.toFixed(0)}% <br/>
            </h1>
              <span className="text-base absolute mt-14">alcançada</span>
            <Grafico cor={props.cor} expectativa={props.expectativa} resultado={props.resultado}/>

            <div className="legend flex gap-5 absolute text-sm" style={{marginTop: '355px', marginBottom: '50px'}}>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 rounded-full" style={{backgroundColor: '#4A4556'}}></div>
                <h4>Esperado {props.reais}{props.expectativa}{props.unidade}</h4>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 rounded-full" style={{backgroundColor: props.cor}} ></div>
            <h4> Alcançado {props.reais}{props.resultado}{props.unidade}</h4>
      </div>
      </div>
    </>
  )
}