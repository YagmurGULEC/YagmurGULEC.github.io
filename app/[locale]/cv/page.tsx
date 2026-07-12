


export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    return (
        <div className="flex justify-center w-full">

            <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vQrpXY2ctw7ibRwPF3SKtg460ZzS-dFv7AOOfEW4Aix-9h7abqsbiQMpW4BncoUz8tUnpYh7wGCD-q5/pub?embedded=true"
                className="w-full max-w-4xl border-0"
                style={{ width: '90%', height: '1000px' }}
                title="Home content"
            />
        </div>
    );
}


