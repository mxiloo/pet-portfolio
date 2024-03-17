'use client';

import styles from './projects.module.scss'
import Burgers from "@/components/burgers/burgers";
import InvestEra from "@/components/Invest-era/invest-era";
import Mesto from "@/components/mesto/mesto";
import RussTravel from "@/components/russ-travel/russ-travel";

function Projects() {

    return (
        <section className={styles.section}>

            <InvestEra />
            <Burgers />
            <Mesto />
            <RussTravel />

        </section>
    )
}

export default Projects