# React 官网

## 井字棋

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

<img src="public/solution1.png" alt="解决1" width="400"/>

- [ ] 重写 Board 以使用两个循环来制作方块而不是对它们进行硬编码。

```js
return (
    <>
      <div className="status">{status}</div>
      {Array(3).fill(null).map((_, row) => (
        <div className="board-row" key={row}>
          {Array(3).fill(null).map((_, col)=>{
            const index = 3 * row + col;
            return (
              <Square
              key={index}
              value={squares[index]}
              onSquareClick={() => handleClick(index)}
              />
            );
          }
          )}
        </div>
      ))}
    </>
  );
```

<img src="public/solution2.png" alt="解决2" width="400"/>

- [ ] 添加一个切换按钮，使可以按升序或降序对落子的步数进行排序。
- [ ] 当有人获胜时，突出显示致使获胜的三个方块（当没有人获胜时，显示一条关于结果为平局的消息）。
- [ ] 在“落子”的历史列表中以 (row, col) 格式显示每步的位置。
