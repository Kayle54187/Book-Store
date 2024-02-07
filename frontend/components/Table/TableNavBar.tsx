import NewProduct from "@/app/(admin-dashboards)/_components/products/NewProduct";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableNavBarProps } from "@/types/common/table";
import { Download, Plus } from "lucide-react";

export default function TableNavBar({
  title,
  searchPlaceHolder,
  showAdd,
  AddComponent,
}: TableNavBarProps) {
  return (
    <div className="p-4 flex items-center justify-between">
      <div>
        <p>{title}</p>
      </div>
      <div className="flex items-center space-x-2">
        <div>
          <Input placeholder={searchPlaceHolder} />
        </div>
        {showAdd && <div>{AddComponent}</div>}
        <div>
          <Button
            variant={"outline"}
            className="bg-[#77A0FB] hover:bg-[#77A0FB]"
          >
            <Download color="white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
