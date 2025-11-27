import { error } from "console";
import { Character, CharacterResponse } from "./types";

export class Helper {
  readonly mainUrl: string;
  constructor() {
    this.mainUrl = process.env.NEXT_PUBLIC_MAIN_URL as string;
  }
  createdUrl(url: string[]) {
    return [this.mainUrl, ...url].join("");
  }
  getCharacterwithQuery(queryString: { page: string; name?: string }) {
    const baseUrl = this.createdUrl([
      process.env.NEXT_PUBLIC_CHARACTER_URL as string,
    ]);
    const params = new URLSearchParams({
      ...queryString,
    });
    return `${baseUrl}?${params.toString()}`;
  }
  getCurrentPage(info: any) {
    if (info.next) {
      const next = new URL(info.next);
      const nextPage = Number(next.searchParams.get("page"));
      return nextPage - 1;
    }

    if (info.prev) {
      const prev = new URL(info.prev);
      const prevPage = Number(prev.searchParams.get("page"));
      return prevPage + 1;
    }

    return 1;
  }
}

export class Services {
  private helper: Helper;
  constructor() {
    this.helper = new Helper();
  }

  async getCharacter(queryString: {
    page: string;
    name?: string;
  }): Promise<CharacterResponse> {
    try {
      const url = this.helper.getCharacterwithQuery(queryString);
      const res = await fetch(url, {
        cache: "no-cache",
      });

      if (!res.ok) {
        throw new Error("API Error: " + res.status);
      }

      const data: CharacterResponse = await res.json();
      data.info.current = this.helper.getCurrentPage(data.info);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCharacterById(id: number | string): Promise<Character | {}> {
    let character = {};
    let paramId = "";
    if (typeof id === "number") paramId = String(id);
    if (typeof id === "string") paramId = id;
    else {
    }
    const url = this.helper.createdUrl([
      process.env.NEXT_PUBLIC_CHARACTER_URL as string,
      "/",
      paramId,
    ]);
    console.log("URL ", url);
    try {
      const res = await fetch(url, {
        cache: "no-cache",
      });

      if (!res.ok) throw new Error("API Error: " + res.status);
      character = await res.json();
    } catch (error) {
      throw error;
    }

    return character;
  }
}
