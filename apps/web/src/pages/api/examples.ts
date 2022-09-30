// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@agreeto/database";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.post.findMany();
  res.status(200).json(posts);
};

export default examples;
