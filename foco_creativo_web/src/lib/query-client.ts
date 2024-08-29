import { Api } from "@/models/api.models";
import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError(err) {
        const error = err as unknown as AxiosError<Api.ErrorResponse>;
        toast.error(error.response?.data.message);
      },
    },
  },
});
