import { Fragment } from "react";
import Article from "../presentation/Article";

export default {
  title: "presentation/Article",
};

export const Default = () => (
  <Article>
    <h1>Quasi Corporis Aut Qui Ducimus Labore Alias</h1>
    <h2>Mollitia Similique Voluptatibus Non</h2>
    <h3>Doloribus Et Perspiciatis Autem Occaecati</h3>
    <p>
      paragraph — Hic natus nihil aliquid assumenda cum corrupti quibusdam sint neque. Quaerat qui
      molestias nostrum et at quod explicabo eos. Reiciendis eius voluptatibus alias delectus et.
      Libero fugit labore nemo numquam vel quia praesentium in dolore illo consequatur. Perferendis
      sed consequatur id reiciendis sunt voluptatem vero. Cum id quasi blanditiis id assumenda.
      Reiciendis nesciunt quibusdam omnis eaque ut.
    </p>
    <ul>
      <li>
        unordered list — Et incidunt quaerat dolores modi excepturi modi optio voluptas id
        voluptatibus.
      </li>
      <li>
        unordered list — Velit voluptatem itaque excepturi omnis nam mollitia eum labore rem tenetur
        qui et.
      </li>
      <li>unordered list — Nihil fuga natus ipsa inventore vel explicabo animi sed placeat ut.</li>
    </ul>
    <h3>Aspernatur Minus Inventore Aut Et Deleniti</h3>
    <ol>
      <li>ordered list — Ea ea voluptatem sequi et rerum.</li>
      <li>ordered list — Tempore qui quae facere dolor veniam libero non eligendi.</li>
      <li>ordered list — Est voluptatibus nesciunt sapiente est nostrum.</li>
    </ol>
    <h2>Harum Nostrum Qui Animi Alias</h2>
    <ul>
      <li>
        <p>
          nested paragraph — Maxime veniam eos nemo dolor sint ea quia natus maxime officiis rem non
          vitae veritatis at. Neque quam deserunt voluptates. Non et aut qui sint. Enim sit
          molestiae voluptates aliquid alias quia ut reprehenderit qui aperiam labore. Sapiente et
          vel delectus ipsa. Minus est beatae voluptatem eos enim aut molestiae velit sit quo velit
          quod. Ut voluptatem quia temporibus laudantium harum dolor.
        </p>
        <ul>
          <li>nested unordered list</li>
          <li>nested unordered list</li>
          <li>nested unordered list</li>
        </ul>
        <p>
          nested paragraph — Placeat qui et impedit animi sit id et ratione sit dignissimos
          pariatur. Unde et repellat nobis saepe ut. Sit et quasi ipsam eum quo est occaecati in eos
          error quia sit officiis et quae. Nihil eos est magni ut incidunt doloribus. Quis molestias
          omnis totam commodi minima est et occaecati quas aut est officiis ullam. Fugiat architecto
          vitae quis ab facere eius et distinctio voluptas. Magnam omnis numquam aspernatur harum
          occaecati qui et corporis ducimus error rerum enim maiores. Tenetur inventore qui porro ut
          nihil commodi similique et cumque dolor ab optio.
        </p>
        <pre>nested codeblock</pre>
        <ol>
          <li>nested ordered list</li>
          <li>nested ordered list</li>
          <li>nested ordered list</li>
        </ol>
      </li>
    </ul>
    <ul>
      <li>
        unordered list
        <ul>
          <li>nested unordered list</li>
          <li>nested unordered list</li>
          <li>nested unordered list</li>
        </ul>
      </li>
      <li>
        unordered list
        <ul>
          <li>nested unordered list</li>
          <li>nested unordered list</li>
          <li>nested unordered list</li>
        </ul>
      </li>
      <li>
        unordered list
        <ul>
          <li>nested unordered list</li>
          <li>nested unordered list</li>
          <li>nested unordered list</li>
        </ul>
      </li>
    </ul>
    <img src="https://www.placecage.com/304/456" alt="" />
    <pre>codeblock</pre>
    <figure>
      <img src="https://www.placecage.com/456/304" alt="" />
      <figcaption>
        figure — Culpa sapiente voluptate voluptates non quis dolorum nobis sunt tempora laboriosam.
      </figcaption>
    </figure>
    <figure>
      <blockquote>
        blockquote — Mollitia explicabo nihil voluptatum labore voluptatum autem mollitia.
      </blockquote>
      <figcaption>
        figure — Sunt dolores suscipit dolore quae ratione aut modi necessitatibus sed consequatur
        voluptas maxime distinctio qui.
      </figcaption>
    </figure>
    <h3>Et Itaque Quibusdam Tempore</h3>
    <p>
      <a href="https://example.com/">link</a> <strong>bold</strong> <b>bold</b> <em>italic</em>{" "}
      <i>italic</i>{" "}
      {["strong", "b"].map((Bold) =>
        ["em", "i"].map((Italic) => (
          <Fragment key={`${Bold}-${Italic}`}>
            <Bold>
              <Italic>bold-italic</Italic>
            </Bold>{" "}
            <Italic>
              <Bold>bold-italic</Bold>
            </Italic>{" "}
          </Fragment>
        )),
      )}
    </p>
    <table>
      <thead>
        <tr>
          <th>table head</th>
          <th>table head</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td>table foot</td>
          <td>table foot</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>table body</td>
          <td>table body</td>
        </tr>
        <tr>
          <td>table body</td>
          <td>table body</td>
        </tr>
        <tr>
          <td>table body</td>
          <td>table body</td>
        </tr>
        <tr>
          <td>table body</td>
          <td>table body</td>
        </tr>
      </tbody>
    </table>
  </Article>
);
