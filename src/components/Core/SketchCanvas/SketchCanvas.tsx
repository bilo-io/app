import React, { MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { ITheme } from 'styles/themes';
import Tooltip from '../Tooltip/Tooltip';
import CustomIcon from '../Icon/CustomIcon/CustomIcon';

interface SketchCanvasProps {
    onSave?: (dataUrl: string) => void;
    theme?: ITheme,
    themeName?: string
}

export const SketchCanvas: React.FC<SketchCanvasProps> = ({ onSave, theme, themeName }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isPainting, setIsPainting] = useState(false);
    const [lastPosition, setLastPosition] = useState<{ x: number, y: number } | null>(null);
    const [stackUndo, setStackUndo] = useState<ImageData[]>([]);
    const [stackRedo, setStackRedo] = useState<ImageData[]>([]);
    const [brushOpacity, setBrushOpacity] = useState(1);
    const [brushSize, setBrushSize] = useState(5);
    const [mode, setMode] = useState<'brush' | 'eraser'>('brush');
    const [brushColor, setBrushColor] = useState('#000000');

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (ctx) {
            // Set canvas size in pixels
            const devicePixelRatio = 1;//window.devicePixelRatio || 1;
            const width = window.innerWidth * devicePixelRatio;
            const height = window.innerHeight * devicePixelRatio;

            canvas.width = width;
            canvas.height = height;

            // Scale the canvas context to account for the device pixel ratio
            ctx.scale(devicePixelRatio, devicePixelRatio);

            ctx.lineCap = 'round';
            ctx.strokeStyle = brushColor;
            ctx.globalAlpha = brushOpacity;
            ctx.lineWidth = brushSize;
            ctxRef.current = ctx;
        }
    }, [brushColor, brushOpacity, brushSize]);


    useEffect(() => {
        const ctx = ctxRef.current;
        if (ctx) {
            ctx.globalAlpha = brushOpacity;
            ctx.lineWidth = brushSize;
            ctx.strokeStyle = brushColor;
        }
    }, [brushOpacity, brushSize, brushColor]);

    useEffect(() => {
        const ctx = ctxRef.current;
        if (ctx) {
            ctx.globalCompositeOperation = mode === 'brush' ? 'source-over' : 'destination-out';
        }
    }, [mode]);

    const getTouchPos = (canvas: HTMLCanvasElement, e: React.TouchEvent<HTMLCanvasElement>): { x: number, y: number } => {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        return {
            x: (touch.clientX - rect.left) * (canvas.width / rect.width),
            y: (touch.clientY - rect.top) * (canvas.height / rect.height)
        };
    };

    const getMousePos = (canvas: HTMLCanvasElement, e: MouseEvent<HTMLCanvasElement>): { x: number, y: number } => {
        const rect = canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) * (canvas.width / rect.width),
            y: (e.clientY - rect.top) * (canvas.height / rect.height)
        };
    };


    const startPaint = (e: MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>): void => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;

        if (ctx && canvas) {
            setStackUndo([...stackUndo, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
        }

        setIsPainting(true);

        const pos = e.type === 'touchstart'
            ? getTouchPos(canvas!, e as React.TouchEvent<HTMLCanvasElement>)
            : getMousePos(canvas!, e as MouseEvent<HTMLCanvasElement>);

        setLastPosition(pos);
    };

    const paint = (e: MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>): void => {
        const canvas = canvasRef.current;
        if (!isPainting) return;
        const ctx = ctxRef.current;

        if (ctx && lastPosition) {
            const pos = e.type === 'touchmove'
                ? getTouchPos(canvas!, e as React.TouchEvent<HTMLCanvasElement>)
                : getMousePos(canvas!, e as MouseEvent<HTMLCanvasElement>);

            ctx.beginPath();
            ctx.moveTo(lastPosition.x, lastPosition.y);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();

            setLastPosition(pos);
        }
    };


    const endPaint = (): void => {
        setIsPainting(false);
        setLastPosition(null);
    };

    const handleClear = (): void => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;

        if (ctx && canvas) {
            // Save the current state for undo
            setStackUndo([...stackUndo, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    const handleSave = (): void => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        onSave?.(canvas.toDataURL());
    };

    const undo = (): void => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;

        if (stackUndo.length > 0 && ctx && canvas) {
            setStackRedo([...stackRedo, ctx.getImageData(0, 0, canvas.width, canvas.height)]); // Save current state to redo stack
            const previousState = stackUndo.pop()!;
            setStackUndo(stackUndo);
            ctx.putImageData(previousState, 0, 0);
        }
    };

    const redo = (): void => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;

        if (stackRedo.length > 0 && ctx && canvas) {
            setStackUndo([...stackUndo, ctx.getImageData(0, 0, canvas.width, canvas.height)]); // Save current state to history stack
            const nextState = stackRedo.pop()!;
            setStackRedo(stackRedo);
            ctx.putImageData(nextState, 0, 0);
        }
    };

    const handleSelectBrush = (): void => {
        setMode('brush');
    };

    const handleSelectEraser = (): void => {
        setMode('eraser');
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrushColor(e.target.value);
    };

    return (
        <>
            <div className="flex flex-row items-center justify-center my-6">
                <div
                    className="w-fit h-fit p-0.5 rounded-full mr-2"
                    style={{
                        backgroundColor: theme?.BACKGROUND,
                        border: `3px solid ${brushColor}`,
                        borderColor: brushColor
                    }}>
                    <div
                        className='w-4 h-4 rounded-full border border-gray-400'
                        style={{ backgroundColor: brushColor, cursor: 'pointer' }}
                        onClick={() => document.getElementById('colorPicker')?.click()}
                    />
                </div>
                <input
                    id="colorPicker"
                    type="color"
                    value={brushColor}
                    onChange={handleColorChange}
                    style={{ display: 'none' }}
                />

                <button onClick={handleSelectBrush} className={`mr-2 ${mode === 'brush' ? 'active' : ''}`}>
                    <Tooltip
                        trigger='hover'
                        content="Brush"
                        themeName={themeName?.includes('dark') ? 'dark' : 'light'}
                        direction={'bottom'}>
                        <FontAwesome name="paint-brush" className="mx-2" />
                    </Tooltip>
                </button>
                <button onClick={handleSelectEraser} className={`mr-2 ${mode === 'eraser' ? 'active' : ''}`}>
                    <Tooltip
                        trigger='hover'
                        content="Eraser"
                        themeName={themeName?.includes('dark') ? 'dark' : 'light'}
                        direction={'bottom'}>
                        <FontAwesome name="eraser" className="mx-2" />
                    </Tooltip>
                </button>
                <button onClick={undo} disabled={stackUndo.length === 0} className="mr-2">
                    <Tooltip
                        trigger='hover'
                        content="Undo"
                        themeName={themeName?.includes('dark') ? 'dark' : 'light'}
                        direction={'bottom'}>
                        {/* <FontAwesome name="rotate-left" className="mx-2" /> */}
                        <CustomIcon name="undo" color={theme?.TEXT} size={22} />
                    </Tooltip>
                </button>
                <button onClick={redo} disabled={stackRedo.length === 0} className="mr-2">
                    <Tooltip
                        trigger='hover'
                        content="Redo"
                        themeName={themeName?.includes('dark') ? 'dark' : 'light'}
                        direction={'bottom'}>
                        {/* <FontAwesome name="rotate-right" className="mx-2" /> */}
                        <CustomIcon name="redo" color={theme?.TEXT} size={22} />
                    </Tooltip>
                </button>
                <button onClick={handleSave} className="mr-2 ml-2">
                    <Tooltip
                        trigger='hover'
                        content="Save"
                        themeName={themeName?.includes('dark') ? 'dark' : 'light'}
                        direction={'bottom'}>
                        <FontAwesome name="save" className="mx-2" />
                    </Tooltip>
                </button>
                <button onClick={handleClear} className="mr-2">
                    <Tooltip
                        trigger='hover'
                        content="Clear"
                        themeName={themeName?.includes('dark') ? 'dark' : 'light'}
                        direction={'bottom'}>
                        <FontAwesome name="trash" className="mx-2" />
                    </Tooltip>
                </button>
            </div>
            <canvas
                ref={canvasRef}
                onMouseDown={startPaint}
                onTouchStart={startPaint}
                onMouseMove={paint}
                onTouchMove={paint}
                onMouseUp={endPaint}
                onMouseLeave={endPaint}
                onTouchEnd={endPaint}
                style={{
                    border: '1px solid black', height: 'calc(100% - 10rem)', width: '100%'
                }}
            />
        </>
    );
};

export default SketchCanvas;
