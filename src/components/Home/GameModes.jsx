import { ImInfinite } from 'react-icons/im'
import { BiTimeFive } from 'react-icons/bi'
import { RiSurveyLine } from 'react-icons/ri'

const gameModes = [
					{
						icon: <RiSurveyLine className='text-3xl' />,
						title: 'Энгийн',
						description: 'Ялахын тулд асуултаа бөглөөрэй! Танд туслах тэмдэгтүүд байна'
					},
					{
						icon: <BiTimeFive className='text-3xl' />,
						title: 'Хугацаатай',
						description: 'Ялахын тулд асуултуудыг тодорхой хугацаанд бөглөнө үү! Та орлуулагдах тэмдэг ашиглаж болно'
					},
					{
						icon: <ImInfinite className='text-3xl' />,
						title: 'Хязгааргүй',
						description: 'Аль болох олон асуултыг бөглөж рекордоо эвдээрэй! Та орлуулагдах тэмдэг ашиглаж болно'
					}
]

export default function GameModes () {
	return (
		<section className='lg:max-w-6xl mx-auto lg:col-start-1 lg:col-end-2 px-8 py-6 flex flex-col justify-center bg-[url("/bg-gamemodes.svg")] text-slate-900 w-full'>
			<h2 className='text-2xl mb-4 font-medium '>Горимууд </h2>
			<nav>
				<ul className='flex flex-col sm:flex-row justify-center gap-5'>
					{gameModes.map((mode, index) => (
						<li key={index + mode.title} className='bg-neutral-300 max-w-sm md:max-w-none bg-opacity-30 backdrop-blur-[2px] rounded p-5 hover:scale-[1.03] transition-all hover:backdrop-blur-0 hover:bg-opacity-100 hover:bg-white shadow-sm mx-auto'>
							{mode.icon}
							<h3 className='text-xl font-medium my-1'>{mode.title}</h3>
							<p className='text-sm'>{mode.description}</p>
						</li>
					))}
				</ul>
			</nav>
		</section>
	)
}
