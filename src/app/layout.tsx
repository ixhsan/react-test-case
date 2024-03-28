import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout, { Footer } from "antd/es/layout/layout";
import Header from "@/components/Header";
import Divider from "antd/lib/divider";
import { Flex } from "antd";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MakNews",
  description: "The Best News",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "white",
};

const layoutStyle: React.CSSProperties = {
  overflow: "hidden",
  width: "100vw",
  height: "100%",
  minHeight: "100vh",
  display: "flex",
  gap: 10,
  backgroundColor: "white",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Providers>
            <Flex>
              <Layout style={layoutStyle}>
                <Header />
                <Divider
                  style={{
                    borderBlockStart: "1px solid rgba(0,0,0,0.24)",
                    margin: "0 0",
                  }}
                />
                <Layout>{children}</Layout>
                <Footer style={footerStyle}>
                  &#169; All rights reserved 2024.
                </Footer>
              </Layout>
            </Flex>
          </Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
