import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";
import { Search } from "../Search/Search";
import { useState } from "react";
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Top />
            <Search />
            <Navigation />
        </header>

    )
}


