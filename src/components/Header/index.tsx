import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

import { useRouter } from 'next/dist/client/router'
import { ActiveLink } from "../ActiveLink"
import logoImg from "../../../public/images/logo.svg"
import Image from 'next/image'

function Header(){
  

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active} >
            <a >Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a >Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}


export { Header }