const AddEditNotes = () => {
  return (
    <div>
        <div className="flex flex-col gap-2">
            <label className="input-la  bel">TITLE</label>
            <input 
                type="text"
                className="text-2xl text-slate-950 outline-none"
                placeholder="Go to Gym at 6 PM"
            />
        </div>

        <div className="flex flex-col gap-2 mt-4">
            <label className="input-label">CONTENT</label>
            <textarea 
                type="text"
                className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
                placeholder="Content"
                rows={10}
                />
        </div>
    </div>
  );
};

export default AddEditNotes
