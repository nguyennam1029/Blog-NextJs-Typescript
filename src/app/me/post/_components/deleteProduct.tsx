// "use client";

// import productApiRequest from "@/apiRequests/products";
// import { Trash2 } from "lucide-react";

// export default function DeleteProduct({ id }: { id: number }) {
//   const handleDelete = () => {
//     console.log(id);
//   };
//   return <Trash2 className="h-5 w-5 text-red-600" onClick={handleDelete()} />;
// }
"use client";

import { Button } from "@/components/ui/button";
import { ProductResType } from "@/schemaValidations/product.schema";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { handleErrorApi } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import productApiRequest from "@/apiRequests/products";
import { Trash2 } from "lucide-react";
import { UserPostsResType } from "@/schemaValidations/account.schema";

export default function DeleteProduct({ productId }: { productId: any }) {
  const { toast } = useToast();
  const router = useRouter();
  const deleteProduct = async () => {
    try {
      await productApiRequest.delete(productId);
      toast({
        description: "Delete successfully",
      });
      router.refresh();
    } catch (error) {
      //   handleErrorApi({ error });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Trash2 className="h-4 w-4 text-white cursor-pointer " />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Do you want to delete this product?
          </AlertDialogTitle>
          <AlertDialogDescription>
            The product it will be permanently deleted!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteProduct}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
