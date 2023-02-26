import { Pie, ResponsivePie } from '@nivo/pie'
import { Colors } from 'chart.js'

interface propsGrafico1 {
  expectativa: number
  resultado: number
  cor: string
}


export default function Grafico1(props: propsGrafico1){
  let vazio = props.expectativa - props.resultado
  const data = [
    {
      "id": "resultado",
      "label": "resultado",
      "value": props.resultado,
      "color": "hsl(77, 30%, 40%, 0.0)"
    },
    {
      "id": "vazio",
      "label": "vazio",
      "value": vazio,
    }
  ]
  return(
  
    <Pie

    data={data}
    margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
    innerRadius={0.7}
    padAngle={0.7}
    width={197}
    height={400}
    
    cornerRadius={45}
    activeOuterRadiusOffset={8}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#ffffff"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    enableArcLabels={false}
    arcLabelsSkipAngle={10}
    defs={[
      {
          id: 'dots',
          type: 'patternDots',
          background: props.cor,
          Colors: '',
          size: 0,
          padding: 1,
          stagger: false
      },
      {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          
          rotation: -45,
          lineWidth: 0,
          spacing: 0
      }
  ]}
  fill={[
      {
          match: {
              id: 'resultado'
          },
          id: 'dots'
        
      },
      {
          match: {
              id: 'vazio'
          },
          id: 'lines',
      },

  ]}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
          ['darker', .6],
            [
              
                'opacity',
                3
            ]
        ]
    }}
    isInteractive={false}
    legends={[]}
/>
  )
}