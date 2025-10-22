
import React, { useState } from 'react';
import ThemeCard from './ThemeCard';
import { BookOpenIcon } from './icons';

const themes = [
    {
        id: 'familia', title: 'Familia', icon: '👨‍👩‍👧‍👦', color: 'red-500', verses: [
            { ref: "Josué 24:15", text: "Pero yo y mi casa serviremos a Jehová." },
            { ref: "Salmos 127:3", text: "He aquí, herencia de Jehová son los hijos; cosa de estima el fruto del vientre." },
            { ref: "Proverbios 22:6", text: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él." },
            { ref: "Colosenses 3:20", text: "Hijos, obedeced a vuestros padres en todo, porque esto agrada al Señor." },
            { ref: "1 Timoteo 5:8", text: "Porque si alguno no provee para los suyos, y mayormente para los de su casa, ha negado la fe, y es peor que un incrédulo." },
            { ref: "Efesios 6:4", text: "Y vosotros, padres, no provoquéis a ira a vuestros hijos, sino criadlos en disciplina y amonestación del Señor." },
        ]
    },
    {
        id: 'matrimonio', title: 'Matrimonio', icon: '💑', color: 'pink-500', verses: [
            { ref: "Génesis 2:24", text: "Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne." },
            { ref: "Efesios 5:25", text: "Maridos, amad a vuestras mujeres, así como Cristo amó a la iglesia, y se entregó a sí mismo por ella." },
            { ref: "Proverbios 18:22", text: "El que halla esposa halla el bien, y alcanza la benevolencia de Jehová." },
            { ref: "1 Corintios 13:4-7", text: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor." },
            { ref: "Eclesiastés 4:9-10", text: "Mejores son dos que uno; porque tienen mejor paga de su trabajo. Porque si cayeren, el uno levantará a su compañero." },
            { ref: "Colosenses 3:14", text: "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto." },
        ]
    },
    {
        id: 'hijos', title: 'Hijos', icon: '👶', color: 'purple-500', verses: [
            { ref: "Salmos 127:3-5", text: "He aquí, herencia de Jehová son los hijos; cosa de estima el fruto del vientre. Como saetas en mano del valiente, así son los hijos habidos en la juventud." },
            { ref: "Proverbios 17:6", text: "Corona de los viejos son los nietos, y la honra de los hijos, sus padres." },
            { ref: "Proverbios 29:17", text: "Corrige a tu hijo, y te dará descanso, y dará alegría a tu alma." },
            { ref: "Efesios 6:1-3", text: "Hijos, obedeced en el Señor a vuestros padres, porque esto es justo. Honra a tu padre y a tu madre, que es el primer mandamiento con promesa." },
            { ref: "Deuteronomio 6:6-7", text: "Y estas palabras que yo te mando hoy, estarán sobre tu corazón; y las repetirás a tus hijos, y hablarás de ellas estando en tu casa." },
            { ref: "3 Juan 1:4", text: "No tengo yo mayor gozo que este, el oír que mis hijos andan en la verdad." },
        ]
    },
    {
        id: 'dinero', title: 'Dinero y Finanzas', icon: '💰', color: 'green-500', verses: [
            { ref: "Proverbios 3:9-10", text: "Honra a Jehová con tus bienes, y con las primicias de todos tus frutos; y serán llenos tus graneros con abundancia." },
            { ref: "Malaquías 3:10", text: "Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos." },
            { ref: "Filipenses 4:19", text: "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús." },
            { ref: "1 Timoteo 6:10", text: "Porque raíz de todos los males es el amor al dinero, el cual codiciando algunos, se extraviaron de la fe." },
            { ref: "Hebreos 13:5", text: "Sean vuestras costumbres sin avaricia, contentos con lo que tenéis ahora; porque él dijo: No te desampararé, ni te dejaré." },
            { ref: "Lucas 6:38", text: "Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo; porque con la misma medida con que medís, os volverán a medir." },
        ]
    }
];


const ThemedVersesSection: React.FC = () => {
    const [activeTheme, setActiveTheme] = useState<string | null>(null);

    const toggleTheme = (themeId: string) => {
        setActiveTheme(activeTheme === themeId ? null : themeId);
    };
    
    return (
        <section className="mb-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8 flex items-center justify-center gap-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                <BookOpenIcon className="w-8 h-8"/>
                Versículos por Temas
                <BookOpenIcon className="w-8 h-8"/>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {themes.map(theme => (
                    <ThemeCard
                        key={theme.id}
                        theme={theme}
                        isActive={activeTheme === theme.id}
                        onToggle={() => toggleTheme(theme.id)}
                    />
                ))}
            </div>
        </section>
    );
}

export default ThemedVersesSection;
