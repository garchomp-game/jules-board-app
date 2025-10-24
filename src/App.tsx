import './App.css'

function App() {
  const boards = [
    {
      id: 1,
      title: "一般的な話題",
      description: "日常的な話題について話し合うボードです",
      postsCount: 42,
      lastUpdated: "2025-10-24"
    },
    {
      id: 2,
      title: "技術討論",
      description: "プログラミングや技術に関する議論の場",
      postsCount: 28,
      lastUpdated: "2025-10-23"
    },
    {
      id: 3,
      title: "お知らせ",
      description: "運営からの重要なお知らせを掲載",
      postsCount: 15,
      lastUpdated: "2025-10-22"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">掲示板一覧</h1>
        
        <div className="space-y-4">
          {boards.map((board) => (
            <div
              key={board.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {board.title}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    {board.description}
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  投稿数: {board.postsCount}
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                最終更新: {board.lastUpdated}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
