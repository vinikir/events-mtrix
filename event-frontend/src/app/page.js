"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { getEvents } from "@/services/api";
import { useState, useEffect } from 'react';
import Header from "@/components/Header/Header";
import useStore from "@/app/store/useStore";
import Eventlist from "@/components/EventList/EventList";
import { Button, Container } from "@mui/material";

export default function Home() {

	const setEvents = useStore((state) => state.setEvents);
	const events = useStore((state) => state.events);
	const limit = useStore((state) => state.limit)
	const setLimit = useStore((state) => state.setLimit)
	const offset = useStore((state) => state.offset)
	const setOffset = useStore((state) => state.setOffset)

	const [loading, setLoading] = useState(true);
	

	useEffect(() => {
		setLoading(true)
		getEvents(limit, offset).then((res) => {
			
			setEvents(res.valor ? res.valor : []);
		}).finally(() => {
			setLoading(false)
		})
	}, [])

	const getMoreEvent = () => {
		getEvents(limit, offset).then((res) => {
			
			setEvents(res.valor ? res.valor : []);
		}).finally(() => {
			setLoading(false)
		})
	}

	
	return (
		<div >
			<Header />
			<Eventlist  events={events} isLoading={loading} />
			<Container maxWidth="xl" className={styles.teste}>
				<Button variant="outlined" size="large" onClick={getMoreEvent}>ver mais</Button>
			</Container>
			

		</div>
	);
}
