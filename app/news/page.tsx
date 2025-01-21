
export default function News() {
    const articles: Array<{title: string, text: string}> = [
        {
            title: "Scion of Weydan Sails!",
            text: "Picture this: a cruise ship, nearly a quarter the size of the Idari, under construction for almost a decade, with eighteen thousand preordered tickets, has finally left its bespoke port in the Drift and will soon be sailing for the Vast. It is the first ship of its kind, carrying a mobile Drift Beacon to allow shuttles of passengers and cargo to navigate safely to it as it makes its way to some of the most exotic reaches of the galaxy.",
        }
    ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {articles.map(element =>(
        <div key={element.title} className="card w-96 bg-base-100 shadow-xl">
          <h3 className="card-title">{element.title}</h3>
          <p>{element.text}</p>
        </div>
      ))};
    </main>
  )
}
