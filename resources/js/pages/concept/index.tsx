import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import AppLayout from "@/layouts/app-layout";
import { Concept, LengthAwarePaginator, type BreadcrumbItem } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";
import { Icon } from "@/components/ui/icon";
import { Clock } from "lucide-react";
import { Paginator } from "@/components/paginator";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Concepts",
        href: "/concepts",
    },
];

export default function Concepts() {
    const { concepts } = usePage<{ concepts: LengthAwarePaginator<Concept> }>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Concepts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
                    {concepts.data.map((concept, index) => {
                        const progress = concept.completed
                            ? 100
                            : concept.progress !== undefined
                                ? (concept.progress / concept.steps) * 100
                                : 0;

                        return (
                            <Link key={index} href={`/concepts/${concept.slug}`}>
                                <Card className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border h-full flex flex-col transition-shadow duration-100 hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-900">
                                    <CardHeader>
                                        <CardTitle>{concept.title}</CardTitle>
                                        <CardDescription>{concept.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-1 justify-between">
                                        <div>
                                            {concept.completed && (
                                                <Badge className="bg-green-500 text-white">Completo</Badge>
                                            )}
                                            {!concept.completed && progress === 0 && (
                                                <div className="flex flex-row items-center gap-x-2">
                                                    <Icon iconNode={Clock} className="h-4 w-4 text-muted-foreground" />
                                                    <p className="text-muted-foreground text-sm">{concept.time} mins</p>
                                                </div>
                                            )}
                                            {!concept.completed && progress > 0 && (
                                                <div className="flex flex-row items-center gap-x-2">
                                                    <Progress className="w-[20%]" value={progress} />
                                                    <p className="text-muted-foreground text-sm">{Math.round(progress)}% concluído</p>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>

                <Paginator paginator={concepts} />
            </div>
        </AppLayout>
    );
}

