export function SectionHeading({ number, english, title, description }: {
    number: string;
    english: string;
    title: string;
    description?: string;
}) {
    return <div className="section-heading"><div><p className="eyebrow">{number} / {english}</p><h2>{title}</h2></div>{description && <p className="section-description">{description}</p>}</div>;
}
