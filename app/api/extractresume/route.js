// import { NextResponse } from 'next/server';
// import pdfParse from 'pdf-parse';

// // export async function POST(req) {
// //     try {
// //         const data = await req.arrayBuffer();
// //         const pdfBuffer = Buffer.from(data);

// //         // Extract text from the PDF
// //         const pdfData = await pdfParse(pdfBuffer);
// //         const extractedText = pdfData.text;
// //         console.log("Extracted Text:", extractedText);

// //         const prompt = `
// //         You are an AI assistant that extracts structured details from resumes.
// //         Analyze the following resume text and return a JSON object with the following details:

// //         {
// //           "name": "Full Name",
// //           "contact": {
// //             "email": "example@example.com",
// //             "phone": "123-456-7890",
// //             "linkedin": "linkedin.com/in/example"
// //           },
// //           "summary": "Brief professional summary",
// //           "skills": ["Skill 1", "Skill 2", "Skill 3"],
// //           "experience": [
// //             {
// //               "company": "Company Name",
// //               "position": "Job Title",
// //               "duration": "Start Date - End Date",
// //               "description": "Responsibilities and achievements"
// //             }
// //           ],
// //           "education": [
// //             {
// //               "institution": "University Name",
// //               "degree": "Degree Name",
// //               "field": "Field of Study",
// //               "duration": "Start Date - End Date"
// //             }
// //           ],
// //           "certifications": [
// //             {
// //               "name": "Certification Name",
// //               "issuer": "Issuer Organization",
// //               "year": "Year Earned"
// //             }
// //           ],
// //           "projects": [
// //             {
// //               "title": "Project Title",
// //               "description": "Brief project summary",
// //               "technologies": ["Tech 1", "Tech 2"]
// //             }
// //           ],
// //           "achievements": ["Achievement 1", "Achievement 2"],
// //           "languages": ["Language 1", "Language 2"]
// //         }

// //         Resume text:
// //         ${extractedText}

// //         Return the details strictly in valid JSON format, without any additional explanations or formatting.
// //         `;

// //         // Send the extracted text to Gemini API
// //         const res = await model.generateContent([{ text: prompt }]);
// //         const rawResponse = await res.response;
// //         const textResponse = typeof rawResponse === 'string' ? rawResponse : await rawResponse.text();
// //         const cleanedResponse = textResponse.replace(/json|/g, '').trim();

// //         return NextResponse.json(JSON.parse(cleanedResponse));
// //     } catch (error) {
// //         console.error("Error extracting resume data:", error);
// //         return NextResponse.json({ error: "Failed to extract resume details. Please try again." }, { status: 500 });
// //     }
// // }


// export async function POST(req) {
//     try {
//         console.log("Extracting resume data...");
//         const data = await req.arrayBuffer();
//         const pdfBuffer = Buffer.from(data);

//         // Extract text from the PDF
//         const pdfData = await pdfParse(pdfBuffer);
//         const extractedText = pdfData.text;
//         console.log("Extracted Text:", extractedText);

//         // Process extracted text with Gemini
//         const resumeData = await extractResumeData(extractedText);

//         return NextResponse.json(resumeData);
//     } catch (error) {
//         console.error("Error extracting resume data:", error);
//         return NextResponse.json(
//             { error: "Failed to extract resume details. Please try again." },
//             { status: 500 }
//         );
//     }
// }

// export async function GET(req) {
//     try {
//         console.log("Extracting resume data...");
//         const data = await req.arrayBuffer();
//         const pdfBuffer = Buffer.from(data);

//         // Extract text from the PDF
//         const pdfData = await pdfParse(pdfBuffer);
//         const extractedText = pdfData.text;
//         console.log("Extracted Text:", extractedText);

//         // Process extracted text with Gemini
//         const resumeData = await extractResumeData(extractedText);

//         return NextResponse.json(resumeData);
//     } catch (error) {
//         console.error("Error extracting resume data:", error);
//         return NextResponse.json(
//             { error: "Failed to extract resume details. Please try again." },
//             { status: 500 }
//         );
//     }
// }