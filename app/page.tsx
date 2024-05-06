import FeedbackTable from "./_components/feedback-table";

type Props = {
  searchParams: {
    pageSize?: string
    currentPage?: string
  }
}
export default function Home({searchParams}: Props) {
  return (
    <div>
      <FeedbackTable searchParams={searchParams} />
    </div>
  );
}
