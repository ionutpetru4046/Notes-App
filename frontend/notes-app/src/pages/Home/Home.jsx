import Navbar from "../../components/Navbar/Navbar";
import NoteCard from '../../components/Cards/NoteCard';

const Home = () => {
  return (
    <>
     <Navbar />

     <div className="container mx-auto">

      <NoteCard 
        title="Meeting on 7th April" 
        date="3rd April 2025" 
        content="Meeting on 7th April Meeting on 7th April"
        tags="#Meeting"
        isPinned={true}
        onEdit={() => {}}
        onDelete={() => {}}
        onPinNote={() => {}}
        />
     </div>
    </>
  )
}

export default Home
