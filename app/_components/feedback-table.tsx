import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {getFeedbacks, ResFeedbacks} from '@/lib/fetchers'

type Props = {
  searchParams: {
    pageSize?: string
    currentPage?: string
  }
}
const FeedbackTable = async ({searchParams}:Props) => {
  const pageSize = Number(searchParams.pageSize) || 10;
  const currentPage = Number(searchParams.currentPage) || 1;
  const result = await getFeedbacks(currentPage, pageSize) as ResFeedbacks;
  const {data, total} = result;

  return <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>type</TableHead>
          <TableHead>content</TableHead>
          <TableHead className="text-right">createdAt</TableHead>
          <TableHead className="text-right">email</TableHead>
          <TableHead className="text-right">notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          data && data.map(item => {
            return <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.content}</TableCell>
            <TableCell>{String(item.createdAt)}</TableCell>
            <TableCell className="text-right">{item.email}</TableCell>
            <TableCell className="text-right">{item.notes}</TableCell>
          </TableRow>
          })
        }
      </TableBody>
    </Table>
  </div>

}

export default FeedbackTable