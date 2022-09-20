const Progress = ({ progress }) => {
  return (
    <>
      <div className="wrapper">
        <div className="bar"></div>
        <div className="number">{progress}%</div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 35px;
          gap: 11px;
        }

        .bar {
          position: relative;
          width: 140px;
          height: 6px;
          background-color: #f2f5f7;
          border-radius: 10px;
        }

        .bar::after {
          content: '';
          display: block;
          width: ${`${progress * 1.4}px`};
          height: 100%;
          border-radius: 6px;
          transition: width ease 1s;
          background: #21b6b7;
        }

        .number {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-dark);
          width: 50px;
        }
      `}</style>
    </>
  )
}

export default Progress

{
  /* <S.Wrapper>
      <S.ProgressBar progress={`${progress}%`} />
      <S.ProgressNumber>{progress}%</S.ProgressNumber>
    </S.Wrapper> */
}
