import Card from './components/Card'
import './App.css'

function App() {
  const data = [
    {
      id: '1',
      imgsrc: 'http://188.166.21.103:4000/188944447a2.jpeg',
      btnCategory: 'Sport',
      title: 'Sport & Environmental Impact',
      pContent: 'From transportation of athletes and spectators to energy consumption during events sports can contribute significantly to greenhouse gas emissions',
      btnViewCategory: 'View Category'
    },
    {
      id: '2',
      imgsrc: 'http://188.166.21.103:4000/1889445cbbc.jpeg',
      btnCategory: 'Concerts',
      title: 'Musical Emissions',
      pContent: 'The production and disposal of materials such as stage equipment and merchandise contribute to the carbon footprint of concerts.',
      btnViewCategory: 'View Category'
    },
    {
      id: '3',
      imgsrc: 'http://188.166.21.103:4000/1889449abaf.jpeg',
      btnCategory: 'Companies',
      title: 'Companies Emissions',
      pContent: 'Companies generate emissions through their operations, which may include manufacturing, transportation, energy consumption, and waste disposal. Emissions can result from.',
      btnViewCategory: 'View Category'
    },
    {
      id: '4',
      imgsrc: 'http://188.166.21.103:4000/1889448406f.jpeg',
      btnCategory: 'Big Events',
      title: 'Big Events Emission',
      pContent: 'Big events may include transportation emissions from attendees traveling to and from the event, energy consumption for lighting, heating, and cooling of the venue.',
      btnViewCategory: 'View Category'
    },
    {
      id: '5',
      imgsrc: 'http://188.166.21.103:4000/188944aed22.jpeg',
      btnCategory: 'Cinema ',
      title: 'Cinema Emissions',
      pContent: 'The film industry generates emissions through various activities, including film production, transportation of equipment and personnel, and energy consumption on film sets and in.',
      btnViewCategory: 'View Category'
    },
    {
      id: '6',
      imgsrc: 'http://188.166.21.103:4000/188944c4c57.jpeg',
      btnCategory: 'Theater',
      title: 'Theater Emissions',
      pContent: 'Theater events, like any live performances, generate emissions through various sources. These may include energy consumption for lighting, heating, and cooling in the theater...',
      btnViewCategory: 'View Category'
    },
    {
      id: '7',
      imgsrc: 'http://188.166.21.103:4000/188944d935b.jpeg',
      btnCategory: 'Culture',
      title: 'Culture Emissions',
      pContent: 'The energy used to power lights, sound systems, and other equipment, as well as the travel emissions of performers and attendees, contribute to greenhouse emissions....',
      btnViewCategory: 'View Category'
    },
    {
      id: '8',
      imgsrc: 'http://188.166.21.103:4000/188c4c4f248.jpeg',
      btnCategory: 'Teatro',
      title: 'Emissione di Co2 al Teatro',
      pContent: `L'impatto degli eventi teatrali sulla location nella quale si svolgono.'`,
      btnViewCategory: 'Visualizza Categoria'
    },

  ]
  return (

    <div>
      <h2 className='header'>Events causing Global Warming
      </h2>
      {data.map(item => (
        <Card
          key={item.id}
          imgsrc={item.imgsrc}
          btnCategory={item.btnCategory}
          title={item.title}
          pContent={item.pContent}
          btnViewCategory={item.btnViewCategory}
        />
      ))}
    </div>
  );
}

export default App;
