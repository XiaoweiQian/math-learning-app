import './App.css';

import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

function App() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <LeftSidebar side="left"/>
      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
        </header>
        
        <div className="flex flex-1 flex-col gap-4 p-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="aspect-video h-12 w-full rounded-lg bg-muted/50"
            />
          ))}
        </div>
      </SidebarInset>
      <RightSidebar side="right" />
    </SidebarProvider>
  );
}

export default App;
