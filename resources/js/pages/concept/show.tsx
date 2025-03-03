import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import AppLayout from "@/layouts/app-layout";
import { Concept, type BreadcrumbItem } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ConceptDetail() {
    const { concept } = usePage<{ concept: Concept }>().props;
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (concept) {
            setProgress((concept.progress / concept.steps) * 100);
        }
    }, [concept]);

    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Concepts", href: "/concepts" },
        { title: concept.title, href: `/concepts/${concept.slug}` },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Concepts - ${concept.title}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <h2 className="text-3xl font-bold">{concept.title}</h2>
                <p className="text-muted-foreground">{concept.description}</p>
                <div className="flex items-center gap-4">
                    <Progress className="w-full" value={progress} />
                    <span className="text-sm text-muted-foreground">{Math.round(progress)}% concluído</span>
                </div>
                <div className="flex justify-between">
                    <Link href="/concepts">
                        <Button variant="outline">Voltar</Button>
                    </Link>
                    <Button>Continuar</Button>
                </div>
            </div>
        </AppLayout>
    );
}
