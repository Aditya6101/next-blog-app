// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return getBlogs(req, res);
    case 'POST':
      return createBlog(req, res);
    default:
      res
        .status(405)
        .json({ message: `${req.method} not allowed`, success: false });
  }
}

async function getBlogs(req: NextApiRequest, res: NextApiResponse) {
  try {
    const allBlogs = await prisma.blog.findMany();
    return res.status(200).json({ data: allBlogs, success: true });
  } catch (error) {
    console.error('Response error', error);
    res
      .status(500)
      .json({ error: 'Error while getting blogs', success: false });
  }
}

async function createBlog(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newBlog = await prisma.blog.create({
      data: {
        blogTitle: body.title,
        blogBody: body.body,
        authorName: body.author,
        createdAt: body.createdAt,
      },
    });
    return res.status(200).json({ data: newBlog, success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error while creating blogs', success: false });
  }
}
