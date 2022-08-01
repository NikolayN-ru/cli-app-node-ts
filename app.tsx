import { format } from "date-fns"
import { Box, Text, render } from "ink"
import React, { useEffect, useState } from "react"
import BigText from 'ink-big-text'
import axios from "axios"

const App = () => {
    const [time, setTime] = useState<string>(format(new Date(), 'dd-MM-yyyy HH:mm:ss'))

    useEffect(() => {
        const timer = setInterval(() => {
            getTime();
            // getStat();
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    const getTime = () => {
        setTime(format(new Date(), 'dd-MM-yyyy HH:mm:ss'))
    }

    // const getStat = async () => {
    //     const { data } = await axios.get('your_url', {
    //         params: {
    //             part: 'statictics',
    //             id: 'ID!',
    //             key: process.env.KEY
    //         }
    //     });
    //     setText(data.YOU_DATA)
    // }

    return (
        <Box borderStyle='round' borderColor='magenta' padding={1} flexDirection='column'>
            <Text color='redBright'><BigText text='Testing' />
            </Text>
            <Text>
                {time}
            </Text>

        </Box>
    )
}

render(<App />);