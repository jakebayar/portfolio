import fs from 'fs';
import path from 'path';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const directoryPath = path.join(process.cwd(), 'public', 'photos');
        const filenames = fs.readdirSync(directoryPath);

        const imagePaths = filenames
            .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
            .map(file => `/photos/${file}`);

        return NextResponse.json({ images: imagePaths }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: 'Error reading files' }, { status: 500 });
    }
}
