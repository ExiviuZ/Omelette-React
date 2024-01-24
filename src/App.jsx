import "./index.css";

function App() {
  document.body.classList.add("bg-neut-eggshell");
  return (
    <>
      <main className="text-[16px] font-[500] sm:my-[2rem] max-w-[600px] w-[100%] p-[0] sm:p-[2rem] text-neut-wenge-brown bg-neut-white sm:rounded-[10px] pb-[1rem] mx-auto">
        <img
          src="/public/images/image-omelette.jpeg"
          alt=""
          className="sm:rounded-[10px] w-[100%]"
        />

        <div className="wrap px-[2rem] pt-[2rem] sm:px-[0] ">
          <h1 className="text-neut-dark-charcoal font-young-serif text-[2.25rem] leading-[1.2] mb-[1.75rem]">
            Simple Omelette Recipe
          </h1>
          <p className="mb-[1rem] mb-[1.75rem]">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="p-[1rem] bg-neut-rose-white rounded-[10px] mb-[1.75rem]">
            <h2 className="mb-[1rem] text-prim-raspberry font-bold">
              Preparation Time
            </h2>
            <ul className="list-inside list-disc flex flex-col gap-[0.75rem]">
              <li className="pl-[1rem]">
                <span className="text-neut-wenge-brown font-bold">Total</span>:
                Approximately 10 minutes
              </li>
              <li className="pl-[1rem]">
                <span className="text-neut-wenge-brown font-bold">
                  Preparation
                </span>
                : 5 minutes
              </li>
              <li className="pl-[1rem]">
                <span className="text-neut-wenge-brown font-bold">Cooking</span>
                : 5 minutes
              </li>
            </ul>
          </div>

          <div className="pb-[2rem] border-b-[1px] border-solid border-neut-light-grey">
            <h2 className="text-neut-dark-charcoal font-young-serif mb-[1.75rem] text-[1.75rem]">
              Ingredients
            </h2>

            <ul className="pl-[2rem] list-disc flex flex-col gap-[0.75rem] marker:text-prim-nutmeg">
              <li className="pl-[1rem]">2-3 large eggs</li>
              <li className="pl-[1rem]">Salt, to taste</li>
              <li className="pl-[1rem]">Pepper, to taste</li>
              <li className="pl-[1rem]">1 tablespoon of butter or oil</li>
              <li className="pl-[1rem]">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <div className="py-[1.75rem] border-b-[1px] border-solid border-neut-light-grey">
            <h2 className="text-neut-dark-charcoal font-young-serif mb-[1.75rem] text-[1.75rem]">
              Instructions
            </h2>

            <ul className="pl-[2rem] flex flex-col gap-[0.75rem] marker:align-top marker:text-prim-nutmeg marker:font-bold list-outside list-decimal">
              <li className="pl-[1rem]">
                <span>
                  <span className="text-neut-wenge-brown font-bold">
                    Beat the eggs:
                  </span>{" "}
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </span>
              </li>
              <li className="pl-[1rem]">
                <span className="text-neut-wenge-brown font-bold">
                  Heat the pan:
                </span>{" "}
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>
              <li className="pl-[1rem]">
                <span className="text-neut-wenge-brown font-bold">
                  Cook the omelette:
                </span>{" "}
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="pl-[1rem]">
                <span className="text-neut-wenge-brown font-bold">
                  Add fillings (optional):
                </span>{" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li className="pl-[1rem]">
                <span>
                  <span className="text-neut-wenge-brown font-bold ">
                    Fold and serve:
                  </span>{" "}
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.
                </span>
              </li>
              <li className="pl-[1rem]">
                <span>
                  <span className="text-neut-wenge-brown font-bold ">
                    Enjoy:
                  </span>{" "}
                  Serve hot, with additional salt and pepper if needed.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-[1.75rem]">
            <h2 className="text-neut-dark-charcoal font-young-serif mb-[1.75rem] text-[1.75rem]">
              Nutrition
            </h2>

            <table className="w-[100%] table-auto border-separate border-spacing-y-[1rem]">
              <caption className="text-left mb-[1rem]">
                The table below shows nutritional values per serving without the
                additional fillings.
              </caption>

              <tbody>
                <tr className="">
                  <td className="border-solid border-b-[1px] border-neut-light-grey pb-[1rem] pl-[2rem]">
                    Calories
                  </td>
                  <td className="border-solid border-b-[1px] border-neut-light-grey pb-[1rem] font-bold text-prim-nutmeg">
                    277kcal
                  </td>
                </tr>
                <tr className=" ">
                  <td className="border-solid border-b-[1px] border-neut-light-grey pb-[1rem] pl-[2rem]">
                    Carbs
                  </td>
                  <td className="border-solid border-b-[1px] border-neut-light-grey pb-[1rem] font-bold text-prim-nutmeg">
                    0g
                  </td>
                </tr>
                <tr className=" ">
                  <td className="border-solid border-b-[1px] border-neut-light-grey pb-[1rem] pl-[2rem]">
                    Protein
                  </td>
                  <td className="border-solid border-b-[1px] border-neut-light-grey pb-[1rem] font-bold text-prim-nutmeg">
                    20g
                  </td>
                </tr>
                <tr>
                  <td className="pl-[2rem]">Fat</td>
                  <td className="font-bold text-prim-nutmeg">22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
