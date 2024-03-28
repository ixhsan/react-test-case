"use client";

import { Flex, Space } from "antd";
import React, { useEffect, useState } from "react";
import NewsItem, { News } from "../NewsItem";
import Pagination from "antd/lib/pagination";
import { URL } from "@/constant";
import Spin from "antd/lib/spin";
import { LoadingOutlined } from "@ant-design/icons";
import LoadingSpinner from "../shared/LoadingSpinner";

interface ApiResponse<T> {
  status: string;
  totalResults: number;
  articles: T;
}

type Query = Record<string, string>;

async function getNews(query: Query): Promise<ApiResponse<News[]> | undefined> {
  try {
    const res = await fetch(URL.concat(`${new URLSearchParams(query)}`));
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default function NewsList() {
  const [newsList, setNewsList] = useState<News[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState<number | undefined>(0);
  const [query, setQuery] = useState<Query>({
    pageSize: "12",
    page: "1",
    q: "world",
  });

  useEffect(() => {
    setIsLoading(true);
    getNews(query)
      .then((res) => {
        setNewsList(
          res?.articles.filter(
            (news) => news.description && news.content && news.urlToImage
          )
        );
        setTotalResults(res?.totalResults);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  const handleChangePage = (page: number, pageSize: number) => {
    setQuery((s) => ({
      ...s,
      page: String(page),
      pageSize: String(pageSize),
    }));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Flex gap={15} justify="center" wrap="wrap" style={{ maxWidth: 1245 }}>
        {newsList &&
          newsList.length > 0 &&
          newsList.map((article) => (
            <NewsItem key={article.title} article={article} />
          ))}
      </Flex>
      <Space align="center" style={{ justifyContent: "center" }}>
        <Pagination
          defaultCurrent={1}
          current={Number(query.page)}
          pageSize={Number(query.pageSize)}
          pageSizeOptions={[12, 24, 36]}
          onChange={handleChangePage}
          total={totalResults}
        />
      </Space>
    </>
  );
}
