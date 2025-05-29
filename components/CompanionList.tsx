interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}


const CompanionList = ( {id, name, topic, subject, duration, color}: 
    CompanionCardProps ) => {
  return (
    <article className='companion-card' style={{backgroundColor:color}}>
        

    </article>
  )
}

export default CompanionList