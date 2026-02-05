// theme.ts

export type Theme = {
    colors: {
        background: string;
        header: string;
        toast: string;

        primary: string;
        primaryLight: string;

        textBlack: string;
        textDark: string;
        textMuted: string;

        hover: string;
        border: string;

        spinnerTrack: string;
        spinnerHighlight: string;
    };
};

export const lightTheme: Theme = {
    colors: {
        background: "#F6F3EE",
        header: "#FFFFFF",
        toast: "#FFE565",

        primary: "#805436",
        primaryLight: "#B8794F",

        textBlack: "#000000",
        textDark: "#333333",
        textMuted: "#555555",

        hover: "#888888",
        border: "#000000",

        spinnerTrack: "#F3F3F3",
        spinnerHighlight: "#805436",
    },
};

export const darkTheme: Theme = {
    colors: {
        background: "#1E1B18",
        header: "#26221E",
        toast: "#A88C3A",

        primary: "#C08A5F",
        primaryLight: "#A06E4A",

        textBlack: "#F6F3EE",   // becomes light text
        textDark: "#C9C3BC",
        textMuted: "#A79F96",

        hover: "#4A423A",
        border: "#3A342E",

        spinnerTrack: "#3A342E",
        spinnerHighlight: "#C08A5F",
    },
};
