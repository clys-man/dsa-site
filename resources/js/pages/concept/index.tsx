import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { Icon } from "@/components/ui/icon";
import { Clock } from "lucide-react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Concepts",
        href: "/concepts",
    },
];

const concepts = [
    { title: "Recursão", slug: "recursao", description: "Conceito de funções que chamam a si mesmas.", progress: 1, steps: 4, time: 5, completed: true },
    { title: "Array", slug: "array", description: "Estrutura de dados linear e indexada.", progress: 0, steps: 5, time: 7, completed: false },
    { title: "Pilha", slug: "pilha", description: "Estrutura LIFO (Last In, First Out).", progress: 2, steps: 5, time: 6, completed: false },
    { title: "Fila", slug: "fila", description: "Estrutura FIFO (First In, First Out).", progress: 0, steps: 4, time: 6, completed: false },
    { title: "Lista Ligada", slug: "lista-ligada", description: "Estrutura onde os elementos são nós encadeados.", progress: 1, steps: 6, time: 8, completed: false },
    { title: "Conjunto", slug: "conjunto", description: "Coleção de elementos únicos sem ordem específica.", progress: 3, steps: 4, time: 5, completed: false },
    { title: "Dicionário ou Hashmap", slug: "dicionario", description: "Estrutura de chave-valor para acesso rápido.", progress: 1, steps: 5, time: 7, completed: false },
    { title: "Árvore", slug: "arvore", description: "Estrutura hierárquica com nós e subárvores.", progress: 0, steps: 7, time: 10, completed: false }
];

export default function Concepts() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Concepts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h2 className="text-2xl font-semibold">Conceitos</h2>
                <div className="border-b border-gray-300 dark:border-gray-700 mb-4"></div>
                <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
                    {concepts.map((concept, index) => {
                        const progress = concept.completed ? 100 : (concept.progress !== undefined ? (concept.progress / concept.steps) * 100 : 0);

                        return (
                            <Link key={index} href={`/concepts/${concept.slug}`}>
                                <Card className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border h-full flex flex-col transition-shadow duration-100 hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-900">
                                    <CardHeader>
                                        <CardTitle>{concept.title}</CardTitle>
                                        <CardDescription>{concept.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-1 justify-between">
                                        <div>
                                            {concept.completed && <Badge className="bg-green-500 text-white">Completo</Badge>}
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
            </div>
        </AppLayout>
    );
}

