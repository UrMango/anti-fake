// 'use client'
import {supabaseConnection} from "@/app/utils/supabaseConnection";

export const dynamic = 'force-dynamic'
export default async function Page() {
    const {data} =  await supabaseConnection.from('links').select();
    if (data === null) return <h1> data is empty</h1>
    return (<div>
        {JSON.stringify(data)}
    </div>
    )
}