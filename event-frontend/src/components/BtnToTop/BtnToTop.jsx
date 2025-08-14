import { Button, Container } from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styles from "./BtnToTop.module.css";


const BtnToTop = ({irParaTopo}) => {
    return (
        <Container className={styles.cointainerBtnTotop} onClick={irParaTopo}  >
            <div className={styles.btnToTop}>
                <ArrowUpwardIcon fontSize="small" />

                Voltar ao topo


            </div>
        </Container>
    )
}

export default BtnToTop