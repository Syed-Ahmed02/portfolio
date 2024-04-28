import { cn } from "@/lib/utils"

function Handdrawn_underline({
    className,
    inverted,
    ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
    return (
        <svg

            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("", className)}
            {...props}
            viewBox="20 16 375 28" preserveAspectRatio="none">
            <path
                fill="none"
                stroke="hsl(197 71% 73%)"
                strokeDasharray="14 8"
                strokeLinecap="round"
                strokeWidth="6"
                d="M24.664 35.874c2.762-1.13 14.332-7.57 19.73-8.071 5.4-.503 13.812 3.73 18.835 4.484 5.022.753 12.394.771 17.04.897 4.646.125 10.744.251 16.144 0 5.399-.251 16.77-1.292 22.421-1.794 5.65-.502 10.655-.287 17.937-1.794 7.283-1.506 25.292-8.09 34.081-8.968 8.79-.88 19.66 2.44 28.7 2.69 9.04.252 24.825-.896 35.874-.896 11.05 0 30.493.52 43.05.896 12.555.377 40.107 1.543 46.636 1.794"
            ></path>
            <defs>
                <linearGradient id="SvgjsLinearGradient1001">
                    <stop offset="0" stopColor="hsl(37, 99%, 67%)"></stop>
                    <stop offset="1" stopColor="hsl(316, 73%, 52%)"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 400"><path d="M215.695068359375,204.4842987060547C227.80269368489584,203.13900756835938,262.182373046875,198.2062733968099,288.3408203125,196.4125518798828C314.499267578125,194.61883036295572,345.1420186360677,188.7892328898112,372.645751953125,193.7219696044922C400.1494852701823,198.6547063191732,419.2825012207031,223.0194346110026,453.36322021484375,226.00897216796875C487.4439392089844,228.9985097249349,556.5022583007812,214.0508244832357,577.1300659179688,211.65919494628906" fill="none" stroke-width="25" stroke="hsl(197 71% 73)" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
    );
}

export { Handdrawn_underline }