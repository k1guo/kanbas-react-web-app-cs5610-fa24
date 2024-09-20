// Student: Keying GUO

import { Route, Routes, Navigate } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import { Http2ServerRequest } from "http2";
import TOC from "./TOC";

export default function Labs(){
    return (
        <div>
            <h1>Welcome to Keying Guo's Web Dev (SEC 02)</h1>
            <h1>Labs</h1>
            <TOC/>
            <Routes>
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<h2>Lab 3</h2>} />
            </Routes>
        </div>
    );
}