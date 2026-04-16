import { createContext, useContext, useEffect, useState } from "react"

const FriendsContext = createContext()

export const FriendsProvider = ({ children }) => {
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)
    const [timeline, setTimeline] = useState([]);

    const entryTimeline = (friend, type) => {
        const newLog = {
            id: Date.now(),
            friendName: friend.name,
            type,
            date: new Date().toLocaleDateString(),

            time: new Date().toLocaleTimeString(),
        };

        setTimeline(prev => [newLog, ...prev]);
    };

    useEffect(() => {
        fetch("/friends.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data)
                setLoading(false)
            })
    }, [])

    const totalFriends = friends.length

    const onTrack = friends.filter(fr => fr.status === "On-Track").length
    const almostDue = friends.filter(fr => fr.status === "Almost Due").length
    const overdue = friends.filter(fr => fr.status === "Overdue").length
    const interactionsThisMonth = friends.reduce((acc, fr) => {
        if (fr.days_since_contact <= 30) {
            return acc + 1
        } else {
            return acc
        }
    }, 0)

    console.log(interactionsThisMonth, "interaction")

    return (
        <FriendsContext.Provider value={{
            friends, loading, totalFriends,
            onTrack,
            almostDue,
            overdue,
            interactionsThisMonth,
            timeline,
            entryTimeline
        }}>
            {children}
        </FriendsContext.Provider>
    )
}

export const useFriends = () => useContext(FriendsContext)