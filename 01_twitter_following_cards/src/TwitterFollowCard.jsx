import {useState} from 'react'

export function TwitterFollowCard({children, userName = 'unknown', initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) // El useState ya crea un array con el estado en la posicion 0 y el nombre de la variable para setear el estado en la posicion 1, aca solo le estamos diciendo con que nombre nos referenciariamos a la misma.
    
    const handleClick = () => {   // Arroy function de jsx
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following' //En HTML, los atributos class aceptan múltiples clases separadas por espacios
    : 'tw-followCard-button'
    


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    alt='el avatar'
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span
                    className='tw-followCard-infoUserName'>@{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>

    )
}