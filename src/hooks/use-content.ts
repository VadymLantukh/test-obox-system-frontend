import useSWR from 'swr';
import type { IContentResponse } from '../types/types.ts';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useContent = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const dataUrl = `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}data.json`;

  const { data, error, isLoading } = useSWR<IContentResponse>(
    dataUrl,
    fetcher,
    {
      suspense: true,
      revalidateOnFocus: false,
    }
  );

  return {
    content: data,
    isError: error,
    isLoading,
  };
};
