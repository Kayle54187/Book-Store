import React from "react";
import TableNavBar from "./TableNavBar";
import { TableLayoutProps } from "@/types/common/table";
import { Separator } from "@/components/ui/separator";

function TableLayout({
  page,
  searchPlaceHolder,
  showAdd,
  title,
  totalPages,
  children,
  AddComponent
}: TableLayoutProps) {
  return (
    <div className="w-full h-full">
      <div>
        <TableNavBar
          searchPlaceHolder={searchPlaceHolder}
          showAdd={showAdd}
          title={title}
          AddComponent={AddComponent}
        />
      </div>
      <Separator />
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}

export default TableLayout;
