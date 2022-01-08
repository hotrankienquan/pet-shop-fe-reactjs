import DogsCard from "./DogsCard";

const Pets = (props) => {
	const {allDogs} = props
	return ( 
		<>
		<section className="dogs-container">
				Here is all my dogs
				{allDogs.map((dog) => {
					return (
						
							<div key={dog.id} className="">
							<DogsCard id={dog.id} name={dog.name}
								breed={dog.breed}
								description={dog.description}
								price={dog.price}
								imageUrl={dog.imageUrl}
							/>
							
							</div>
						
					)
				})}
		</section>
		
		</>
	);
}
 
export default Pets;