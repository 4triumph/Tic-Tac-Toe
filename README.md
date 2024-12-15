# React 官网

## 井字棋
包含了官网中井字棋的部分以及给出的可扩展的部分。下列代码仅为解决问题的核心代码

- [x] 基础部分

<img src="public/showinit.png" alt="初始版本1" width="300"/>

- [x] 仅针对当前着手，显示“You are at move #…”而不是按钮。

```js
if (move === currentMove) {
  return (
    <li key={move}>
      <span>You are at move #{move}</span>
    </li>
  );
}
```

<img src="public/solution1.png" alt="解决1" width="350"/>

- [x] 重写 Board 以使用两个循环来制作方块而不是对它们进行硬编码。

```js
return (
  <>
    <div className="status">{status}</div>
    {Array(3)
      .fill(null)
      .map((_, row) => (
        /*使用 => () 的场景：

          返回单一表达式，逻辑简单。

          代码清晰时，能省略 return 提高可读性。*/
        <div className="board-row" key={row}>
          {Array(3)
            .fill(null)
            .map((_, col) => {
              /* 使用 => {} 的场景：

                函数需要多行代码处理。

                有其他逻辑需要执行（例如变量声明、条件判断等）。

                必须显式使用 return 返回值。 */
              const index = 3 * row + col;
              return (
                <Square
                  key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                />
              );
            })}
        </div>
      ))}
  </>
);
```

<img src="public/solution2.png" alt="解决2" width="300"/>

- [x] 添加一个切换按钮，使可以按升序或降序对落子的步数进行排序。

```js
const [isAscending, setIsAscending] = useState(true);

const sortedMoves = isAscending ? moves : moves.slice().reverse();

<button onClick={() => setIsAscending(!isAscending)}>
  {isAscending ? "Ascending" : "Descending"}
</button>
<ul>{sortedMoves}</ul>
```

<img src="public/solution3_1.png" alt="解决3_1" width="300"/>
<img src="public/solution3_2.png" alt="解决3_2" width="300"/>

- [x] 当有人获胜时，突出显示致使获胜的三个方块（当没有人获胜时，显示一条关于结果为平局的消息）。

```js
function Square({ value, onSquareClick, isHighlight }) {
  return (
    <button
      className={`square ${isHighlight ? "highlight" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

const { winner, line } = calculateWinner(squares);
let status;
if (winner) {
  status = "Winner: " + winner;
} else if (!squares.includes(null)) {
  status = "Draw";
} else {
  status = "Next player: " + (xIsNext ? "X" : "O");
}

return (
  <Square
    key={index}
    value={squares[index]}
    onSquareClick={() => handleClick(index)}
    isHighlight={isHighlight}
  />
);

for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return { winner: squares[a], line: lines[i] };
  }
}
return { winner: null, line: null };
```

<img src="public/solution4_1.png" alt="解决4_1" width="300"/>
<img src="public/solution4_2.png" alt="解决4_2" width="300"/>

- [ ] 在“落子”的历史列表中以 (row, col) 格式显示每步的位置。


