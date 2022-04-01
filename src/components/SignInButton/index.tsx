import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import { signIn,signOut, useSession } from 'next-auth/react'


export function SignInButton() {  
  const {data: session} = useSession() 

  //Se o usuário tiver sessão ativa mostra as info. do usuario
  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
      >
      <FaGithub color="#04d361" />
      {session.user.name} <FiX color="737380" className={styles.closeIcon}/>
    </button>

  ) : ( //se nao, mostra o botão de logar
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
      >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>

  )

}