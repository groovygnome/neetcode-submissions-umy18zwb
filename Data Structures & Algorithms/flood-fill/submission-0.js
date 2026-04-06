class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color, scolor = image[sr][sc]) {
        let rows = image.length;
        let cols = image[0].length;
        if(sr > rows-1 || sc > cols-1 || sr < 0 || sc < 0 || image[sr][sc] != scolor || image[sr][sc] === color) return image;

        image[sr][sc] = color;

        this.floodFill(image, sr+1, sc, color, scolor);
        this.floodFill(image, sr-1, sc, color, scolor);
        this.floodFill(image, sr, sc+1, color, scolor);
        this.floodFill(image, sr, sc-1, color, scolor);

        return image;
    }
}
