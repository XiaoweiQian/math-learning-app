import './App.css';

import { LeftSidebar } from "@/components/left-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

function App() {
  return (

    <ResizablePanelGroup direction="horizontal">
    <SidebarProvider>
        <LeftSidebar side="left"/>
      <ResizablePanel minSize={40} >
      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        
        <div className="flex flex-1 flex-col gap-4 p-4"> 
            pdf content
        </div>
      </SidebarInset>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={25}>Two</ResizablePanel>
    </SidebarProvider>
    </ResizablePanelGroup>

  );
}

export default App;
