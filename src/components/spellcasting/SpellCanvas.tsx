import React, { useRef, useEffect, useState } from 'react';
import { Button } from '../ui/Button';

interface Point {
  x: number;
  y: number;
}

interface SpellCanvasProps {
  targetPattern: Point[];
  onSpellCast: (accuracy: number) => void;
}

export const SpellCanvas: React.FC<SpellCanvasProps> = ({ targetPattern, onSpellCast }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [userPattern, setUserPattern] = useState<Point[]>([]);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        setContext(ctx);
        drawTargetPattern(ctx);
      }
    }
  }, []);

  const drawTargetPattern = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.strokeStyle = '#d97706';
    ctx.setLineDash([5, 5]);
    targetPattern.forEach((point, i) => {
      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();
    ctx.setLineDash([]);
  };

  const startDrawing = (e: React.MouseEvent) => {
    if (context) {
      setIsDrawing(true);
      const { offsetX, offsetY } = e.nativeEvent;
      setUserPattern([{ x: offsetX, y: offsetY }]);
      context.beginPath();
      context.moveTo(offsetX, offsetY);
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !context) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setUserPattern([...userPattern, { x: offsetX, y: offsetY }]);
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    if (context) {
      setIsDrawing(false);
      context.closePath();
      const accuracy = calculateAccuracy(userPattern, targetPattern);
      onSpellCast(accuracy);
    }
  };

  const calculateAccuracy = (user: Point[], target: Point[]): number => {
    // Simplified accuracy calculation
    let totalDistance = 0;
    const step = Math.floor(user.length / target.length);
    
    target.forEach((targetPoint, i) => {
      const userPoint = user[i * step] || user[user.length - 1];
      const distance = Math.sqrt(
        Math.pow(targetPoint.x - userPoint.x, 2) + 
        Math.pow(targetPoint.y - userPoint.y, 2)
      );
      totalDistance += distance;
    });

    const maxDistance = canvasRef.current?.width || 500;
    const accuracy = Math.max(0, 100 - (totalDistance / target.length / maxDistance * 100));
    return Math.round(accuracy);
  };

  const clearCanvas = () => {
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      drawTargetPattern(context);
      setUserPattern([]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={500}
        height={400}
        className="border-2 border-amber-600 rounded-lg bg-black/80 cursor-crosshair"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <Button
        onClick={clearCanvas}
        variant="secondary"
        className="px-4 py-2"
      >
        Clear Spell
      </Button>
    </div>
  );
};