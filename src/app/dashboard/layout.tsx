import { AppSidebar } from "@/components/app-sidebar"
import {

    SidebarProvider,

} from "@/components/ui/sidebar"
import React from "react";
import {ThemeProvider} from "next-themes";

export default function Page({children}:{children: React.ReactNode}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>

        </SidebarProvider>
    )
}
