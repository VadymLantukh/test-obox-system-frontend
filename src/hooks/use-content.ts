import useSWR from 'swr';
import type { IContentResponse } from '../types/types.ts';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useContent = () => {
  const { data, error, isLoading } = useSWR<IContentResponse>(
    '/data.json',
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
