import remarkBreaks from "remark-breaks";
import Markdown from "react-markdown";
import {fetchData} from "@/utils/fetchData";

export default async function Footer() {
    const footerColumns = await fetchData('footer_column');
    const footerText = await fetchData('footer_text');
    return (
        <footer className="w-full row-start-3 flex flex-col flex-wrap items-center justify-center text-xs bg-bgfooter">
            <section className="w-full max-w-[1024px] grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b-2">
                {footerColumns.map((item) => (
                    <div key={item.id} className="text-center md:text-left">
                        <h2 className="text-red-500 font-semibold text-lg mb-2 max-w-[300px] mx-auto">
                            {item.title}
                        </h2>
                        <Markdown
                            className="text-gray-700 leading-loose max-w-[300px] mx-auto"
                            remarkPlugins={[remarkBreaks]}
                        >
                            {item.content}
                        </Markdown>
                    </div>
                ))}
            </section>
            <div className="w-full max-w-[1024px] p-8 text-center">
                {footerText.map((item) => (
                    <Markdown key={item.id} remarkPlugins={[remarkBreaks]}>{item.content}</Markdown>
                ))}
            </div>
        </footer>
    )
}