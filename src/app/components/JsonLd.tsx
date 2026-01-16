export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Roberto Carrasco",
        "image": "https://olympuswolf.cl/trainer-portrait.jpeg",
        "url": "https://olympuswolf.cl",
        "jobTitle": "Entrenador Personal y Coach de Hipertrofia",
        "description": "Entrenador Personal especializado en hipertrofia muscular y entrenamiento para mujeres. Método centrado en la transformación física y mental.",
        "sameAs": [
            "https://www.instagram.com/the.olympus.wolf/",
            "https://www.instagram.com/r.missa.c._/",
            "https://www.tiktok.com/@missa.c._"
        ],
        "brand": {
            "@type": "Brand",
            "name": "Olympus Wolf",
            "logo": "https://olympuswolf.cl/tow-logo.png"
        },
        "knowsAbout": ["Entrenamiento de Fuerza", "Hipertrofia", "Nutrición Deportiva", "Entrenamiento Híbrido"],
        "areaServed": "Viña del Mar, Chile" // Assuming based on context
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
