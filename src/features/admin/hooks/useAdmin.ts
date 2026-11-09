import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loggedIn } from "../store/authSlice";
import type { BlogPost } from "../../blog/types/blog.types";
import {
  deleteArticle,
  fetchArticle,
  fetchArticles,
  loginApi,
  saveArticle,
} from "../api/article.api";

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi(email, password),
    onSuccess: (data) => dispatch(loggedIn(data)),
  });
};

export const useArticles = () =>
  useQuery({
    queryKey: ["admin", "articles"],
    queryFn: fetchArticles,
  });

export const useArticle = (slug: string | undefined) =>
  useQuery({
    queryKey: ["admin", "articles", slug],
    queryFn: () => fetchArticle(slug!),
    enabled: !!slug,
  });

export const useSaveArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: BlogPost) => saveArticle(post),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin", "articles"] }),
  });
};

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (slug: string) => deleteArticle(slug),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin", "articles"] }),
  });
};
