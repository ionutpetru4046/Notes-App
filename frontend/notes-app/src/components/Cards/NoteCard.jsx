import { MdOutlinePushPin } from 'react-icons/md';
import { MdCreate, MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className=''>
      <div className="">
        <div>
           <h6 className="text-sm font-medium">{title}</h6>
            <span className="text-xs text-slate-500">{date}</span>
          </div>

        <MdOutlinePushPin className="" onClick={onPinNote} />
      </div>

       <p className=''>{content?.slice(0,60)}</p>

      <div className="">
        <div className='text-xs text-slate-500'>{tags}</div>

        <div className='flex items-center gap-2'>
          <MdCreate 
            className='icon-btn hover:text-green-600' 
            onClick={onEdit}
            />

            <MdDelete 
              className='icon-btn hover:text-red-500'
              onClick={onDelete}
              />  

        </div>
      </div>
    </div>
  );
};
NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string,
  tags: PropTypes.array,
  isPinned: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onPinNote: PropTypes.func,
};

export default NoteCard;
