import FistCard from "./components/cards/FistCard"
import SecondCard from "./components/cards/SecondCard"
import ThirdCard from "./components/cards/ThirdCard"
import CardDown from "./components/cards/CardDown"


export default function Layout() {
  return(
    <div className="h-screen w-screen flex justify-center items-center" style={{backgroundColor: "#292738"}}>

      <div className="" style={{height: "752px", width:"1120px"}}>

        <div className="flex gap-8">
          
          <FistCard/>
          
          <SecondCard/>

          <ThirdCard/>
          
        </div>
          
        <CardDown/>
        </div>


    </div>
  )
}