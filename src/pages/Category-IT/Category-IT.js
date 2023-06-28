import { Link } from "react-router-dom";

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";


function ItalyCategoryPage() {

    const data = [
        {
            id: '1',
            imgsrc: 'https://www.bresciatourism.it/content/uploads/2020/11/brescia-teatro-grande-1200x800.jpg',
            btnCategory: 'Teatro',
            title: 'Teatro a impatto ambientale positivo',
            pContent: `L'impatto degli eventi teatrali sulla location nella quale si svolgono.`,
            btnViewCategory: 'Visualizza Categoria',

        },
        {
            id: '2',
            imgsrc: 'https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?w=2000',
            btnCategory: 'Concerti musicali',
            title: 'Concerti musicali a impatto ambientale positivo',
            pContent: 'Lo scopo dell’adozione dei criteri ambientali minimi per eventi culturali è quello di migliorare l’impronta ecologica degli eventi culturali.',
            btnViewCategory: 'Visualizza Categoria',
        },
        {
            id: '3',
            imgsrc: 'https://i.pinimg.com/originals/86/11/82/8611821187c0875b17a58040b9b89319.jpg',
            btnCategory: 'Eventi sportivi',
            title: 'Eventi sportivi',
            pContent: 'Nel processo di transizione ecologica, lo sport svolge un ruolo fondamentale, rappresentando una forte industria globale in continua crescita, e come tale, tenuto a fare la sua.',
            btnViewCategory: 'Visualizza Categoria',
        },
        {
            id: '4',
            imgsrc: 'https://www.captio.com/hubfs/Imatges/8-hints-for-organising-a-company-event.jpg',
            btnCategory: 'Eventi aziendali',
            title: 'Convegni e congressi a impatto ambientale positivo',
            pContent: 'Un convegno ecologico è quello progettato, organizzato e realizzato in modo da minimizzare gli impatti ambientali negativi, lasciando così un’eredità positiva per la',
            btnViewCategory: 'Visualizza Categoria'
        },

    ]


    return (
        <div className="category-page">
            <Header />
            <h2 className='header'>Eventi che Causano il Riscaldamento Globale</h2>
            {/* Render the card list */}
            {data.map(item => (
                <Card
                    key={item.id}
                    imgsrc={item.imgsrc}
                    btnCategory={item.btnCategory}
                    title={item.title}
                    pContent={item.pContent}
                >
                    {/* Use Link to navigate to the category page */}
                </Card>
            ))}
        </div>
    )

}

export default ItalyCategoryPage;