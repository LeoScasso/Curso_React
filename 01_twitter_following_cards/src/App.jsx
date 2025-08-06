import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
    
    const users = [
        {
            userId: '1', // Solo de ejemplo!
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            userId: '2',
            userName: 'TheGrefg',
            name: 'The grefg',
            isFollowing: false
        },
        {
            userId: '3',
            userName: 'Rubiu5',
            name: 'elrubius',
            isFollowing: true
        }
    ]

export function App () {    

    return (
        <section className="App">
            {
                users.map(({userId ,userName, name, isFollowing}) => (
                        <TwitterFollowCard
                            key= {userId}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                ))
            
        }
        </section>
    )
}