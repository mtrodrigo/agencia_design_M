import "./globals.css";

export const metadata = {
  title: "Agência de Design M",
  description: "A melhor agência de design do Brasil"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
