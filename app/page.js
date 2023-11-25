import Image from 'next/image'
import SubMenuComponent from './SubMenuComponent'

export default function Home() {

  const menu = [
    {
      title: "TechMalasi",
      id:1,
      link:"https://www.youtube.com/@techmalasi9802",
      submenu:[
        {
          title: "Next.js",
          id:2,
          link:"#",
        },
        {
          title: "Javascript",
          id:3,
          link:"#",
          submenu:[
            {
              title:"Payment Gateway",
              id:4,
              link:"#",
            }
          ]
        },
    ]
    },
    {
      title: "mmantratech",
      id:5,
      link:"https://mmantratech.com/"
    },
    {
      title: "MongoDb",
      id:6,
      link:"#",
    },
    {
      title: "Tutorials",
      id:7,
      link:"#",
      submenu: [
        {
          title: "C+++",
          id:8,
          link:"#",
        },
        {
          title: "Tailwind",
          id:9,
          link:"#",
        },
        {
          title: "Database",
          id:10,
          link:"#",
        },
        {
          title: "Javascript",
          id:11,
          link:"#",
          submenu:[
              {
                title: "Variables",
                id:12,
                link:"#",
              },
              {
                title: "Loops",
                id:13,
                link:"#",
                submenu:[
                  {
                    title:"forLoop",
                    id:14,
                    link:"#",
                  }
                ]
              },
          ]
        },
        {
          title: "Wordpress",
          id:15,
          link:"#",
        },
      ],
    },
    {
      title: "Youtube",
      id:16,
      link:"#",
    },
  ];


  return (
   <div>
   <SubMenuComponent menu={menu}/>
   </div>
  )
}
