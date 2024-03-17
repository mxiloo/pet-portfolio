import type {Metadata} from "next";
import {Press_Start_2P} from "next/font/google";
import "./globals.css";

const press_Start_2P = Press_Start_2P({
    weight: "400",
    style: "normal",
    subsets: ['cyrillic']
});

export const metadata: Metadata = {
    title: "MVXM | Портфолио",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={press_Start_2P.className}>
                {children}
            </body>
        </html>
    );
}