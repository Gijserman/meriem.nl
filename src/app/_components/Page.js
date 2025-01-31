import { fetchData } from '../../utils/fetchData';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

export default async function Page({type}) {
    const page = await fetchData(type);

    return (
        <>
            {page.map((item) => (
                <>
                    <p key={item.id}>{item.content}</p>
                    {item.kolom1 && item.kolom2 && item.kolom3 &&
                        <div className="flex justify-between sm:items-end flex-wrap mt-2.5 flex-col sm:flex-row">
                            <div><Markdown remarkPlugins={[remarkBreaks]}>{item.kolom1}</Markdown></div>
                            <div><Markdown remarkPlugins={[remarkBreaks]}>{item.kolom2}</Markdown></div>
                            <div><Markdown remarkPlugins={[remarkBreaks]}>{item.kolom3}</Markdown></div>
                        </div>
                    }
                </>
            ))}
        </>
    )
}