"use client";

import { LayerType } from '@/@types/canvas';
import { useStorage } from '@/liveblocks.config';
import { memo } from 'react';
import React from 'react'
import Rectangle from './Rectangle';
import { Ellipse } from './Ellipse';
import { Text } from './Text';
import { Note } from './Note';
import { Path } from './Path';
import { colorToCss } from '@/lib/utils';

type LayerPreviewProps = {
    id: string;
    onLayerPointerDown: (event: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
}

const LayerPreview = memo(({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    
    const layer = useStorage((root) => root.layers.get(id));

    if(!layer) return null;
    
    switch(layer.type) {
        case LayerType.Path:
            return (
                <Path key={id} id={id} points={layer.points} onPointerDown={(event) => onLayerPointerDown(event, id)} stroke={selectionColor} x={layer.x} y={layer.y} fill={layer.fill ? colorToCss(layer.fill) : "#000"} />
            )
        case LayerType.Note:
            return (
                <Note id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />
            )
        case LayerType.Rectangle:
            return (
                <Rectangle id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />
            )
        case LayerType.Ellipse:
            return (
                <Ellipse id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />
            )
        case LayerType.Text:
            return (
                <Text id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />
            )
        default:
            console.warn("Unknown layer type");
            return null;
    }
})

LayerPreview.displayName = "LayerPreview";

export default LayerPreview;