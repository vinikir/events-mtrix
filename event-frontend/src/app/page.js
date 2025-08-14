"use client";
import styles from "./page.module.css";
import { getEvents } from "@/services/api";
import { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header/Header";
import useStore from "@/app/store/useStore";
import Eventlist from "@/components/EventList/EventList";
import { Button, Container } from "@mui/material";
import BtnToTop from "@/components/BtnToTop/BtnToTop";


export default function Home() {

	const setEvents = useStore((state) => state.setEvents);
	const events = useStore((state) => state.events);
	const limit = useStore((state) => state.limit)
	const setSowOptionsMore = useStore((state) => state.setSowOptionsMore)
	const showOptionsMore = useStore((state) => state.showOptionsMore)
	const showBtnToTop = useStore((state) => state.showBtnToTop)
	const setShowBtnToTop = useStore((state) => state.setShowBtnToTop)
	const offset = useStore((state) => state.offset)
	const setOffset = useStore((state) => state.setOffset)

	const [loading, setLoading] = useState(true);

	const topoRef = useRef(null);

	const irParaTopo = () => {
		topoRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {

		setLoading(true)
		getMoreEvent()
		const handleScroll = () => {
			

			if (window.scrollY > 300) {
				setShowBtnToTop(true);
			} else {
				setShowBtnToTop(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);

	}, [])

	const getMoreEvent = () => {

		getEvents(limit, offset).then((res) => {

			
			if (res.valor.length <= 0) {
				setSowOptionsMore(false)
				return
			}


			setOffset(offset + limit)

			setEvents(res.valor ? [...events, ...res.valor] : []);

		}).finally(() => {

			setLoading(false)

		})

	}

	return (
		<div ref={topoRef} >
			<Header />
			<Eventlist events={events} isLoading={loading} />
			{
				showOptionsMore && (
					<Container maxWidth="xl" className={styles.cointainerBtnShowMore}>
						<Button variant="outlined" size="large" onClick={getMoreEvent}>ver mais</Button>
					</Container>
				)
			}
			{
				showBtnToTop && (
					<BtnToTop irParaTopo={irParaTopo} />
				)
			}


		</div>
	);
}
