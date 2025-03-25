// import { NextResponse } from 'next/server';
// // import pdfParse from 'pdf-parse';

// export async function POST(req) {
//     try {
//             console.log("Extracting resume data...");
//             // const data = await req.arrayBuffer();
//             // const pdfBuffer = Buffer.from(data);
    
//             // Extract text from the PDF
//             const pdfData = await pdfParse(pdfBuffer);
//             const extractedText = pdfData.text;
//             console.log("Extracted Text:", extractedText);
    
//             // Process extracted text with Gemini
//             const resumeData = await extractResumeData(extractedText);
    
//             return NextResponse.json(resumeData);
//         } catch (error) {
//             console.error("Error extracting resume data:", error);
//             return NextResponse.json(
//                 { error: "Failed to extract resume details. Please try again." },
//                 { status: 500 }
//             );
//         }
// }

// export async function GET(req) {
//     try {
//         console.log("Extracting resume data...");
       

//         return NextResponse.json();
//     } catch (error) {
//         console.error("Error extracting resume data:", error);
//         return NextResponse.json(
//             { error: "Failed to extract resume details. Please try again." },
//             { status: 500 }
//         );
//     }
// }