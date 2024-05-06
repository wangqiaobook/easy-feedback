"use server"
import prisma from "@/lib/prisma";

/**
 * 创建新反馈
 */
export type FeedbackProps = {
  type?: string;
  content: string;
  email: string;
  name: string;
}
export async function creatFeedback(data:FeedbackProps){
  try{
    const feedback = await prisma.feedback.create({
      data: {
        name: data.name,
        email: data.email,
        content: data.content,
        type: data.type
      },
    });
    return feedback;
  } catch(error){
    return error
  }
}

export type Feedback = {
  id:string;
  type?: string;
  content: string;
  email: string;
  name: string;
  createdAt: Date;
}
export type ResFeedbacks = {
  data: Feedback[]
  total: number
}
/**
 * 获取反馈
 */
export async function getFeedbacks(currentPage:number = 1, pageSize:number = 10) {
  const skip = (currentPage - 1) * pageSize;
  try {
    const feedback = await prisma.feedback.findMany({
      take: pageSize,
      skip,
      orderBy: {
        createdAt: "desc",
      },
    });
    const total = await prisma.feedback.count(); // 获取总数
    return {data:feedback, total};
  } catch (error) {
    console.error('Error fetching feedback:', error);
    return error;
  }
}