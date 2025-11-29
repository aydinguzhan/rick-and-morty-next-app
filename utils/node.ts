import { Character, Info } from "./types";

export class CharacterNode {
  private characters: Character[] | [];

  constructor() {
    this.characters = [];
  }

  setCharacters(characters: Character[]) {
    this.characters = characters;
  }

  getCharacters() {
    return this.characters;
  }
}

export class PageInfoNode {
  private info: Info;
  private clientCurrentPage: number;
  constructor() {
    this.info = {
      count: 0,
      next: null,
      pages: 0,
      prev: null,
      current: 1,
    };
    this.clientCurrentPage = 1;
  }

  setPageInfo(info: Info) {
    this.info = info ?? this.info;
  }
  setClientPageAttack(currentPageNumber: number) {
    this.clientCurrentPage = currentPageNumber;
  }

  getPageInfo() {
    return this.info;
  }
  getCurrentClientPageAttack() {
    return this.clientCurrentPage;
  }
}
export class EpisodeNode {
  private episodes: string[] = [];
  private visibleCount: number;
  private step: number;

  constructor(step = 3) {
    this.visibleCount = step;
    this.step = step;
  }

  setEpisodes(episodes: string[]) {
    this.episodes = episodes;
  }

  getVisibleEpisodes() {
    return this.episodes.slice(0, this.visibleCount);
  }

  canLoadMore() {
    return this.visibleCount < this.episodes.length;
  }

  loadMore() {
    this.visibleCount += this.step;
  }

  remainingEpisodes() {
    return Math.max(this.episodes.length - this.visibleCount, 0);
  }

  reset() {
    this.visibleCount = this.step;
  }
}
