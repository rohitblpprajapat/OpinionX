import Card from "./components/cards";
import FooterNav from "./components/FooterNav";
import Navbar from "./components/Navbar";

const games = ([
	{
	  title: 'Basketball Championship',
	  description: 'Bet on the winning team.',
	  odds: '2.5x',
	  image: 'src/assets/Logo 640x640.png' 
	},
	{
	  title: 'Soccer World Cup',
	  description: 'Predict the winner of the tournament.',
	  odds: '1.8x',
	  image: 'src/assets/Logo 640x640.png' 
	},
	{
	  title: 'us election',
	  description: 'Predict the winner of the election.',
	  odds: '1.8x',
	  image: 'src/assets/Logo 640x640.png' 
	},
	{
	  title: 'Formula 1 Racing',
	  description: 'Bet on the fastest lap time.',
	  odds: '3.0x',
	  image: 'src/assets/Logo 640x640.png' 
	}
  ])

function App() {
	

	return (
		<>
			<div className="">
				<Navbar />
				<section className="w-full flex flex-col justify-center mt-20">
					<div className="flex justify-center flex-wrap my-12">
						{games.map((item, index) => (
							<Card 
							key={index}
							title={item.title}
							description={item.description} />
						))}
					</div>
				</section>
				<FooterNav />
			</div>
		</>
	);
}

export default App;
