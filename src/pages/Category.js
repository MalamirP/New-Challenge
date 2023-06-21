import { Link } from "react-router-dom"

import Card from "../components/Card"

export default function Category() {

    const data = [
        {
            id: '1',
            imgsrc: 'https://images.unsplash.com/photo-1616271049250-02a7697e99ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            btnCategory: 'Sport',
            title: 'Sport & Environmental Impact',
            pContent: 'From transportation of athletes and spectators to energy consumption during events sports can contribute significantly to greenhouse gas emissions ',
            btnViewCategory: 'View Category',

        },
        {
            id: '2',
            imgsrc: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            btnCategory: 'Concerts',
            title: 'Musical Emissions',
            pContent: 'The production and disposal of materials such as stage equipment and merchandise contribute to the carbon footprint of concerts.',
            btnViewCategory: 'View Category',
        },
        {
            id: '3',
            imgsrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            btnCategory: 'Companies',
            title: 'Companies Emissions',
            pContent: 'Companies generate emissions through their operations, which may include manufacturing, transportation, energy consumption, and waste disposal. Emissions can result from.',
            btnViewCategory: 'View Category',
        },
        {
            id: '4',
            imgsrc: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            btnCategory: 'Big Events',
            title: 'Big Events Emission',
            pContent: 'Big events may include transportation emissions from attendees traveling to and from the event, energy consumption for lighting, heating, and cooling of the venue.',
            btnViewCategory: 'View Category'
        },
        {
            id: '5',
            imgsrc: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            btnCategory: 'Cinema ',
            title: 'Cinema Emissions',
            pContent: 'The film industry generates emissions through various activities, including film production, transportation of equipment and personnel, and energy consumption on film sets and in.',
            btnViewCategory: 'View Category'
        },
        {
            id: '6',
            imgsrc: 'https://images.unsplash.com/photo-1583482183620-f692113aafc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRoZWF0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            btnCategory: 'Theater',
            title: 'Theater Emissions',
            pContent: 'Theater events, like any live performances, generate emissions through various sources. These may include energy consumption for lighting, heating, and cooling in the theater...',
            btnViewCategory: 'View Category'
        },
        {
            id: '7',
            imgsrc: 'https://images.unsplash.com/photo-1488861859915-4b5a5e57649f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            btnCategory: 'Culture',
            title: 'Culture Emissions',
            pContent: 'The energy used to power lights, sound systems, and other equipment, as well as the travel emissions of performers and attendees, contribute to greenhouse emissions....',
            btnViewCategory: 'View Category'
        },
        {
            id: '8',
            imgsrc: 'https://artlogic-res.cloudinary.com/w_2400,h_1260,c_fill,f_auto,fl_lossy,q_60/artlogicstorage/jacksonfineart/images/view/b9ced2d452be7c8fc4352bb14fd469fep.png',
            btnCategory: 'Teatro',
            title: 'Emissione di Co2 al Teatro',
            pContent: `L'impatto degli eventi teatrali sulla location nella quale si svolgono.'`,
            btnViewCategory: 'Visualizza Categoria'
        },

    ]

    return (
        <div>
            <h2 className='header'>Events causing Global Warming</h2>
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
                    <Link to="/category">View Category</Link>
                </Card>
            ))}
        </div>
    )
}