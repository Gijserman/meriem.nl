export default function Footer() {
    return (
        <footer className="w-[773px] row-start-3 flex gap-6 flex-wrap items-center justify-center text-xs">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 border-t-2 border-b-2">
                <div className="text-center md:text-left">
                    <h3 className="text-red-500 font-semibold text-lg mb-2">Begeleiding op maat</h3>
                    <p className="text-gray-700 leading-loose">
                        Ik werk aan de vaardigheden waar jullie kind moeite mee heeft. Voor de één
                        is dat leren lezen, voor de ander sociale omgang of voorbereidende rekenen.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-red-500 font-semibold text-lg mb-2">Samenwerken</h3>
                    <p className="text-gray-700 leading-loose">
                        Samen met de school kijken we naar de aandachtspunten voor jullie kind en
                        stellen we een passend plan op met heldere doelen.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-red-500 font-semibold text-lg mb-2">Vergoeding</h3>
                    <p className="text-gray-700 leading-loose">
                        De school ontvangt rugzakken voor leerlingen met bijvoorbeeld een beperking
                        of gedragsstoornis. Mogelijk komt jullie kind hiervoor in aanmerking.
                    </p>
                </div>
            </section>
            <p>
                Ik kan me voorstellen dat je nog vragen hebt. Bel me voor antwoorden en advies op 06 145 29 630 of stuur
                een
                bericht naar mail@meriem.nl
            </p>
        </footer>
    )
}