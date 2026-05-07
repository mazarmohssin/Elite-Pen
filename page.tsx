import { Metadata } from 'next';

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const lang = (await params).lang;

  let title = 'Elite Pen';
  let description = 'Welcome to Elite Pen';

  if (lang === 'ar') {
    title = 'قلم النخبة';
    description = 'مرحبا بكم في قلم النخبة';
  } else if (lang === 'fr') {
    title = "Plume d'Élite";
    description = "Bienvenue à la Plume d'Élite";
  } else if (lang === 'es') {
    title = 'Pluma de Élite';
    description = 'Bienvenido a Pluma de Élite';
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: lang,
    },
  }
}

export default async function Page({ params }: Props) {
  const lang = (await params).lang;
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full p-8 text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 capitalize">
          {lang === 'ar' ? 'مرحبا' : lang === 'fr' ? 'Bonjour' : lang === 'es' ? 'Hola' : 'Hello'}
        </h1>
        <p className="text-xl text-gray-600">
          This is the {lang} section of Elite Pen.
        </p>
      </div>
    </div>
  );
}
