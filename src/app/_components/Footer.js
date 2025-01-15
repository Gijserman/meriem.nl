export default function Footer() {
    return (
        <footer className="w-full row-start-3 flex flex-col flex-wrap items-center justify-center text-xs bg-gray-100">
            <section className="w-full max-w-[1024px] grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b-2">
                <div className="text-center md:text-left">
                    <h3 className="text-red-500 font-semibold text-lg mb-2 max-w-[300px] mx-auto">Begeleiding op maat</h3>
                    <p className="text-gray-700 leading-loose max-w-[300px] mx-auto">
                        Ik werk aan de vaardigheden waar jullie kind moeite mee heeft. Voor de één
                        is dat leren lezen, voor de ander sociale omgang of voorbereidende rekenen.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-red-500 font-semibold text-lg mb-2 max-w-[300px] mx-auto">Samenwerken</h3>
                    <p className="text-gray-700 leading-loose max-w-[300px] mx-auto">
                        Samen met de school kijken we naar de aandachtspunten voor jullie kind en
                        stellen we een passend plan op met heldere doelen.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-red-500 font-semibold text-lg mb-2 max-w-[300px] mx-auto">Vergoeding</h3>
                    <p className="text-gray-700 leading-loose max-w-[300px] mx-auto">
                        De school ontvangt rugzakken voor leerlingen met bijvoorbeeld een beperking
                        of gedragsstoornis. Mogelijk komt jullie kind hiervoor in aanmerking.
                    </p>
                </div>
            </section>
            <p className="w-full max-w-[1024px] p-8 text-center">
                Ik kan me voorstellen dat je nog vragen hebt. Bel me voor antwoorden en advies op 06 145 29 630 of stuur
                een
                bericht naar mail@meriem.nl
            </p>
        </footer>
    )
}