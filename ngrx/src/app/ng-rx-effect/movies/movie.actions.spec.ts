import * as fromMovie from "./movie.actions";

describe("loadMovies", () => {
  it("should return an action", () => {
    expect(fromMovie.loadMoviesAction().type).toBe("[Movie] Load Movies");
  });
});
