import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient, resend } from "@upstash/qstash";
import config from "@/lib/config";

// Khởi tạo WorkflowClient để gọi các workflow
export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

// Khởi tạo QStashClient để gửi email qua Resend
const qstashClient = new QStashClient({
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  // Chắc chắn rằng bạn dùng email của Resend trong môi trường Dev
  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }), // Sử dụng API Key của Resend
    },
    body: {
      from: "Project Dev <onboarding@resend.dev>", // Email mặc định của Resend
      to: [email], // Địa chỉ email nhận
      subject,
      html: message, // Nội dung HTML của email
    },
  });
};
