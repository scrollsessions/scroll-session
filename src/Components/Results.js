function Results({children}) {

  return (
    <div className="w-full pt-10 flex items-center justify-center">
      <div className="bg-[#fef0dd] rounded-2xl p-4 md:p-10 flex items-center justify-center flex-col w-11/12 lg:w-3/6 divide-y">
        {children}
      </div>
    </div>
  );
}

export default Results;
