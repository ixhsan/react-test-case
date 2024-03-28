"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import Card from "antd/lib/card/Card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Source {
  id: string | null;
  name: string;
}

export interface News {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsItemProps {
  article: News;
}

export default function NewsItem(props: NewsItemProps) {
  const router = useRouter();
  const { setNews } = useGlobalContext();

  const handleSetDetail = async () => {
    const slug = props.article.title
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");
    setNews(props.article);
    router.push(`/detail/${slug}`);
  };

  return (
    <Card
      title={props.article.title}
      extra={
        <Link href={props.article.url} target="_blank">
          More
        </Link>
      }
      style={{
        width: 300,
        cursor: "pointer",
      }} // size="small"
      cover={
        <img
          alt={props.article.title}
          src={props.article.urlToImage || ""}
          height={300}
        />
      }
      onClick={handleSetDetail}
    >
      <p>{props.article.description}</p>
    </Card>
  );
}
