import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'What is a Salesfinity Parallel Dialer?',
    message: 'What is a Salesfinity Parallel Dialer?'
  },
  {
    heading: 'Apollo.io vs ZoomInfo?',
    message: 'Apollo.io vs ZoomInfo?'
  },
  {
    heading: 'The best parallel dialer for Apollo.io?',
    message: 'The best parallel dialer for Apollo.io?'
  },
  {
    heading: 'Cold calling vs cold emailing',
    message: 'Cold calling vs cold emailing'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
