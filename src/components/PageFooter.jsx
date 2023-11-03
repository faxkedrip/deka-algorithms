import Image from 'next/image'
import playSound from '@/helpers/playSound'
import soundOn from '../assets/sound-on.svg'
import soundOff from '../assets/sound-off.svg'
import { useEffect, useState } from 'react'
import { MdInfo } from 'react-icons/md'
import { GoAlert } from 'react-icons/go'

export default function Footer ({ alert = false }) {
	const [sound, setSound] = useState(true)
	const [showInfo, setShowInfo] = useState(true)

	useEffect(() => {
		if (!localStorage.getItem('sound')) localStorage.setItem('sound', sound)
		else setSound(localStorage.getItem('sound') === 'true')
	}, [])

	useEffect(() => localStorage.setItem('sound', sound), [sound])

	function handleClick (info = true) {
		info ? setShowInfo(!showInfo) : setSound(!sound)
		playSound('switch-on')
	}

	function handleSoundON () {
		setSound(true)
		localStorage.setItem('sound', true)
		playSound('switch-on')
	}

	return (
		<footer className='fixed right-4 bottom-3 z-20'>
			<nav>
				<ul className='flex gap-4'>
					<li className='relative'>
						<button title='Мэдээлэл' className={` align-middle relative z-20 hover:scale-105 p-1.5 bg-white rounded-md ${showInfo ? 'scale-110' : ''}`} onClick={() => handleClick(true)}>
							{
								alert
									? <GoAlert className='text-[25px] mx-auto' color='#0f172a' />
									: <MdInfo className='text-[25px]' style={{ color: '#1c233a' }} />
							}
						</button>
						<p className={`
							text-white bg-black absolute bottom-full -right-14 sm:bottom-auto sm:top-[2px] whitespace-pre border border-white 
							sm:whitespace-nowrap text-sm md:text-base bg-white text-slate-900 rounded-md py-1 px-4 text-left 
							transition-all ${showInfo ? 'opacity-100 -right-14  sm:!right-7 ' : 'opacity-0 right-0 pointer-events-none'}`}>
							{
								
								alert
									? 'The questions made by AI may have errors. \nOnly some questions are made by IA/me :)/'
										//ashiglah zaawar bolgood solij bolno
									: <span> Made with lav by <a href="https://www.facebook.com/delgernym" target="_blank" rel="noreferrer" className={`underline ${showInfo ? '' : 'hidden'}`}>deka</a></span>
							}
						</p>
					</li>

					<li>
						<button title={sound ? 'Дуу хаах' : 'Дуу нээх'} className='align-middle hover:scale-105 p-1.5 bg-white rounded-md'>
							{
								sound
									? <Image src={soundOn} alt="" width={25} height={25} onClick={() => setSound(false)} />
									: <Image src={soundOff} alt="" width={25} height={25} onClick={handleSoundON} />
							}
						</button>
					</li>
				</ul>
			</nav>
		</footer>
	)
}
