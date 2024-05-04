'use client'

import '@stream-io/video-react-sdk/dist/css/styles.css';
import { Room } from '@/db/schema';
import {
    Call,
    CallControls,
    SpeakerLayout,
    StreamCall,
    StreamTheme,
    StreamVideo,
    StreamVideoClient,
} from '@stream-io/video-react-sdk';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { YourApiKey } from './apikey';
import { GenerateToken } from './generateToken';

// const apiKey:string = process.env.STREAM_API_KEY!
const apiKey = YourApiKey() // stream API key
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDhmZjEzZjUtNDQ2ZS00NDlkLWJlZGUtMmJhMGYzNTA5NDgzIn0.Z_iQ2fEFJyKBfVHDDtH3EUakEw8SddFsMkmmwdMTKg4';

export function VideoStreaming({room} : {room : Room}) {
    const [client, setClient] = useState<StreamVideoClient | null>(null)
    const [call, setCall] = useState<Call | null>(null)
    const session = useSession()

    useEffect(() => {
        if (!session.data) return
        if (!room) return

        const userId = session.data.user.id

        const client = new StreamVideoClient({
            apiKey, user: {
                id: userId
            },
            tokenProvider: () => GenerateToken()
        });
        const call = client.call('default', room.id);
        call.join({ create: true });
        setCall(call)
        setClient(client)

        return () => {
            call.leave();
            client.disconnectUser();
        }
    }, [session, room])

    return (
        client && call && <StreamVideo client={client}>
            <StreamTheme>
                <StreamCall call={call}>
                    <SpeakerLayout />
                    <CallControls />
                </StreamCall>
            </StreamTheme>
        </StreamVideo>
    );
};