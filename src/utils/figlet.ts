import figletCb from "figlet";

export type Fonts = "Slant" | "Alpha" | "Larry 3D" | "Roman" | "Speed";

export const figlet = (text: string, font: Fonts = "Speed") =>
  new Promise((resolve, reject) => {
    figletCb(
      text,
      {
        font,
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
