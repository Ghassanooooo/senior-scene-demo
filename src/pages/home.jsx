
import { AccordionDemo } from "@/components/examples/accordion";
import { AlertDemo } from "@/components/examples/alert";
import { AlertDialogDemo } from "@/components/examples/alert-dialog";
import { AvatarDemo } from "@/components/examples/avatar";
import { ButtonDemo } from "@/components/examples/button";
import { CalendarDemo } from "@/components/examples/calendar";
import { CardWithForm } from "@/components/examples/card";
import { CollapsibleDemo } from "@/components/examples/collapsible";
import { ComboboxDemo } from "@/components/examples/combobox";
import { CommandDemo } from "@/components/examples/command";
import { ContextMenuDemo } from "@/components/examples/context-menu";
import { DataTableDemo } from "@/components/examples/data-table";
import { DatePickerDemo } from "@/components/examples/date-picker";
import { DialogDemo } from "@/components/examples/dialog";
import { DropdownMenuDemo } from "@/components/examples/dropdown-menu";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <AlertDemo />
      <AccordionDemo />

      <div>
        <ButtonDemo />
        <CollapsibleDemo />
        <ContextMenuDemo />
      </div>

      <div>
        <AvatarDemo />
        <DropdownMenuDemo />
        <DialogDemo />
        <ComboboxDemo />
        <DatePickerDemo />
        <AlertDialogDemo />
      </div>

      <CalendarDemo />
      <CardWithForm />

      <CommandDemo />

      <DataTableDemo />
    </div>
  );
}
export default Home;



