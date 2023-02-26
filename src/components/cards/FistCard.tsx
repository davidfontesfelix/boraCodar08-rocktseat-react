import happyFace from '../../assets/happyFace.svg'

export default function FistCard(){
  return(
    <div className="
          rounded-2xl
          flex
          items-center
          flex-col" 
          style={{
            height: "379px", 
            width:"296px", 
            backgroundColor: "#363447"
            }}>
              <h1 className="mt-6 text-white text-2xl font-semibold" >NPS geral</h1>
              <div className="   mt-8 flex flex-col items-center">
                <img className="pt-11" src={happyFace} alt="" />
                <h3 className="mt-4 text-2xl mb-11 font-semibold" style={{color: "#81FBB8"}}>Excelente!</h3>
              </div>
              <div className="flex justify-center" style={{gap: '10px', marginTop: '51px'}}>
                <p className="text-sm text-white font-medium">NPS score</p>
                <h4 className="text-sm text-white">75</h4>
              </div>
      </div>
  )
}