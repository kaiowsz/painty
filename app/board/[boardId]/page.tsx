import Canvas from "@/components/shared/canvas/Canvas"
import CanvasLoading from "@/components/shared/canvas/CanvasLoading";
import { Room } from "@/components/shared/Room"

type BoardIdPageProps = {
    params: {
        boardId: string;
    }
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {

    return (
        <Room roomId={params.boardId} fallback={<CanvasLoading/>}>
            <Canvas boardId={params.boardId} />
        </Room>
    )
}

export default BoardIdPage