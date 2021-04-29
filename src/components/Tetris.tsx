import { Field } from "./Field/Field";
import { ScoreTable } from "./ScoreTable/ScoreTable";
import { Buttons } from "./Buttons/Buttons";

import "./Tetris.css"

export const Tetris = () => {
  return <div className="main">
    <Field />
    <div className="content">
      <ScoreTable />
      <Buttons />
    </div>
  </div>
}
