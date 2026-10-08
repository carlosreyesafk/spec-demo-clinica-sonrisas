export const metadata = {
  title: "Clínica Odontológica Sonrisas | Odontología · Los Ríos, Santo Domingo",
  description: "Clínica Odontológica Sonrisas — odontología en Los Ríos, Santo Domingo. Limpieza, ortodoncia, implantes y estética dental. Citas: (809) 561-7590.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
