export interface ShapeProperties {
    x: number;
    y: number;
    width?: number;
    height?: number;
    radius?: number;
    fill?: string;
    text?: string;
    image?: {
        image: HTMLImageElement;
        // You can include other image properties here if needed
    };
    // Add any other properties specific to your shape types
}

export interface Shape {
    id: string;
    type: 'Rect' | 'Circle' | 'Text' | 'Image';
    properties: ShapeProperties;
}