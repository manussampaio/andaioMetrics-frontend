// frontend\src\components\card-analise-admin.jsx
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

export default function CardAnaliseAdmin({
    analise,
    confirmDelete,
    onEdit,
    onDelete,
    onRequestDelete,
    onCancelDelete,
}) {
    console.log(analise);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{analise.nome}</CardTitle>
                <CardDescription>
                    {analise.data}
                </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex flex-col gap-1">
                <span>Peso do ovo: {analise.pesoOvo}</span>
                <span>Peso da casca: {analise.pesoCasca}</span>
                <span>Peso da gema: {analise.pesoGema}</span>
            </CardContent>
            <CardFooter className="flex gap-2">
                {confirmDelete === analise.id ? (
                    <>
                        <span className="text-sm text-destructive flex-1">
                            Confirmar exclusão?
                        </span>
                        <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => onDelete(analise.id)}
                        >
                            Sim
                        </Button>
                        <Button size="sm" variant="outline" onClick={onCancelDelete}>
                            Não
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => onRequestDelete(analise.id)}
                        >
                            <Trash2 className="size-3.5 mr-1" /> Excluir
                        </Button>
                    </>
                )}
            </CardFooter>
        </Card>
    );
}
